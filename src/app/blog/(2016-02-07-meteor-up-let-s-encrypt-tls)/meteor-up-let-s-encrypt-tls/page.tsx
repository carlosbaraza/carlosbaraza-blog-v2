import type { Metadata } from "next";
import { PostLayout } from "@/components/blog/PostLayout";
import { post } from "./meta";

export const metadata: Metadata = {
  title: post.title,
  description: post.summary,
  openGraph: {
    title: post.title,
    description: post.summary,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateUpdated,
    images: post.images,
  },
};

export default function MeteorUpLetsEncryptPage() {
  return (
    <PostLayout post={post}>
      <p>
        <a
          href="https://letsencrypt.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Let&apos;s encrypt</strong>
        </a>{" "}
        is a new certificate authority which issues TLS certificates for free.
      </p>

      <p>
        Today we are going to learn how to generate a certificate, add it to
        your Meteor project and deploy the application with{" "}
        <a
          href="https://github.com/arunoda/meteor-up/tree/mupx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meteor Up X
        </a>
        .
      </p>

      <p>
        The first step is to configure your server using mupx setup, ensuring
        your mup.json doesn&apos;t define the property ssl.
      </p>

      <p>
        Now we want to ensure that the server is not binding to the port 80
        meanwhile we generate the certificate. This is needed in order to use the
        standalone plugin of letsencrypt, as it spawns a web server that the
        Certificate Agent uses to validate the domain.
      </p>

      <pre>
        <code>{`mupx stop`}</code>
      </pre>

      <p>
        Then we ssh into the server and we clone the repository:
      </p>

      <pre>
        <code>{`sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt`}</code>
      </pre>

      <p>
        We run the standalone certificate generator and we follow the wizard
        giving the email and domains:
      </p>

      <pre>
        <code>{`sudo /opt/letsencrypt/letsencrypt-auto certonly`}</code>
      </pre>

      <p>
        You will probably receive the following output when the wizard completes:
      </p>

      <pre>
        <code>{`IMPORTANT NOTES:
  - If you lose your account credentials, you can recover through
    e-mails sent to myemail@email.com.
  - Congratulations! Your certificate and chain have been saved at
    /etc/letsencrypt/live/example.com/fullchain.pem. Your cert
    will expire on 2016-05-06. To obtain a new version of the
    certificate in the future, simply run Let's Encrypt again.
  - Your account credentials have been saved in your Let's Encrypt
    configuration directory at /etc/letsencrypt. You should make a
    secure backup of this folder now. This configuration directory will
    also contain certificates and private keys obtained by Let's
    Encrypt so making regular backups of this folder is ideal.
  - If you like Let's Encrypt, please consider supporting our work by:

    Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
    Donating to EFF:                    https://eff.org/donate-le`}</code>
      </pre>

      <p>We can now exit the ssh session.</p>

      <p>
        From the project folder we copy the generated certificates from the
        server:
      </p>

      <pre>
        <code className="language-bash">{`scp root@example.com:/etc/letsencrypt/live/example.com/fullchain.pem .

scp root@example.com:/etc/letsencrypt/live/example.com/privkey.pem .`}</code>
      </pre>

      <p>
        Now we need to generate a bundle with the both keys to be used by nginx:
      </p>

      <pre>
        <code className="language-bash">{`cat fullchain.pem privkey.pem > bundle.crt`}</code>
      </pre>

      <p>
        Finally we configure Meteor Up X with the following mup.json
        configuration:
      </p>

      <pre>
        <code className="language-json">{`{
  // Server authentication info
  "servers": [
    {
      "host": "example.com",
      "username": "root"
    }
  ],

  // Install MongoDB in the server, does not destroy local MongoDB on future setup
  "setupMongo": false,

  // Show a progress bar during the upload of the bundle to the server.
  // Might cause an error in some rare cases if set to true, for instance in Shippable CI
  "enableUploadProgressBar": true,

  // Application name (No spaces)
  "appName": "example",

  // Location of app (local directory)
  "app": ".",

  // Configure environment
  "env": {
    "PORT": 80,
    "ROOT_URL": "http://www.example.com",
    "MONGO_URL": "mongodb://..."
  },

  "ssl": {
    "certificate": "./bundle.crt", // this is a bundle of certificates
    "key": "./privkey.pem", // this is the private key of the certificate
    "port": 443
  },

  "deployCheckWaitTime": 15
}`}</code>
      </pre>

      <p>Setup the environment and copy the certificate:</p>

      <pre>
        <code>{`mupx setup`}</code>
      </pre>

      <p>
        You should ensure that you have the package force-ssl installed in you
        meteor project. If not, run meteor add force-ssl.
      </p>

      <p>
        Finally, everything is ready to run mupx deploy and enjoy your new free
        and secure encryption.
      </p>

      <p>
        <strong>Note:</strong> After 90 days, the certificate will expire and the
        same process should be repeated to renew the certificate.{" "}
        <a
          href="https://forums.meteor.com/t/setting-up-ssl-with-letsencrypt-and-meteorup/14457/15"
          target="_blank"
          rel="noopener noreferrer"
        >
          It is currently schedule the integration of letsencrypt within mupx
        </a>
        .
      </p>
    </PostLayout>
  );
}
