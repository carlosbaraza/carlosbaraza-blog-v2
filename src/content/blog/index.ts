import type { BlogPost } from "@/lib/types";

// Import all post metadata from colocated page folders (sorted newest first)
import { post as ideationFindingAGoodBusinessIdea } from "@/app/[lang]/blog/(2021-12-08-ideation-finding-a-good-business-idea)/ideation-finding-a-good-business-idea/meta";
import { post as databaseDesignCourse } from "@/app/[lang]/blog/(2021-08-11-database-design-course)/database-design-course/meta";
import { post as neverSplitTheDifferenceBookNotes } from "@/app/[lang]/blog/(2021-06-12-never-split-the-difference-book-notes)/never-split-the-difference-book-notes/meta";
import { post as causeAndEffectFallacies } from "@/app/[lang]/blog/(2021-06-04-cause-and-effect-fallacies)/cause-and-effect-fallacies/meta";
import { post as buildingAStoryBrand } from "@/app/[lang]/blog/(2021-05-28-building-a-story-brand)/building-a-story-brand/meta";
import { post as typescriptStringToNumber } from "@/app/[lang]/blog/(2021-05-16-typescript-string-to-number)/typescript-string-to-number/meta";
import { post as loonshtsBookNotes } from "@/app/[lang]/blog/(2020-12-28-loonshots-book-notes)/loonshots-book-notes/meta";
import { post as covid19AnonymousLettersToPatients } from "@/app/[lang]/blog/(2020-12-28-covid-19-anonymous-letters-to-patients)/covid-19-anonymous-letters-to-patients/meta";
import { post as shouldIBuyTheDip } from "@/app/[lang]/blog/(2020-10-21-should-i-buy-the-dip)/should-i-buy-the-dip/meta";
import { post as softwareAutomation } from "@/app/[lang]/blog/(2020-07-07-software-automation)/software-automation/meta";
import { post as stoicJournal } from "@/app/[lang]/blog/(2020-02-27-stoic-journal)/stoic-journal/meta";
import { post as upworkTheWorstPlatform } from "@/app/[lang]/blog/(2019-09-23-upwork--the-worst-platform-for-software-engineers-)/upwork--the-worst-platform-for-software-engineers-/meta";
import { post as redirector } from "@/app/[lang]/blog/(2019-04-30-redirector)/redirector/meta";
import { post as hopefullySimpleWebassemblyStartingGuide } from "@/app/[lang]/blog/(2019-04-29-hopefully-simple-webassembly-starting-guide)/hopefully-simple-webassembly-starting-guide/meta";
import { post as aws4curl } from "@/app/[lang]/blog/(2019-04-11-aws4curl)/aws4curl/meta";
import { post as isWindowsAnOption2019 } from "@/app/[lang]/blog/(2019-03-20-is-windows-an-option-for-developers-in-2019-)/is-windows-an-option-for-developers-in-2019-/meta";
import { post as wisertag } from "@/app/[lang]/blog/(2019-03-01-wisertag)/wisertag/meta";
import { post as deepfakesWillChallengeDemocracy } from "@/app/[lang]/blog/(2019-01-20-deepfakes-will-challenge-democracy)/deepfakes-will-challenge-democracy/meta";
import { post as webassemblyLondonMeetup } from "@/app/[lang]/blog/(2018-06-23-webassembly-london-meetup)/webassembly-london-meetup/meta";
import { post as isItAGoodTimeMigrateOsxToWindows } from "@/app/[lang]/blog/(2018-04-24-is-it-a-good-time-for-developers-to-migrate-from-osx-to-windows-)/is-it-a-good-time-for-developers-to-migrate-from-osx-to-windows-/meta";
import { post as dazn } from "@/app/[lang]/blog/(2018-04-01-dazn)/dazn/meta";
import { post as unicornContributor } from "@/app/[lang]/blog/(2017-10-17-unicorn-contributor)/unicorn-contributor/meta";
import { post as designedOfficialLogoWebassembly } from "@/app/[lang]/blog/(2017-02-21-designed-the-official-logo-for-webassembly)/designed-the-official-logo-for-webassembly/meta";
import { post as superintelligenceRuminations } from "@/app/[lang]/blog/(2017-02-20-superintelligence-ruminations)/superintelligence-ruminations/meta";
import { post as homeawayExpedia } from "@/app/[lang]/blog/(2016-09-01-homeaway-expedia)/homeaway-expedia/meta";
import { post as hirespaceCom } from "@/app/[lang]/blog/(2016-03-01-hirespace-com)/hirespace-com/meta";
import { post as meteorUpLetsEncryptTls } from "@/app/[lang]/blog/(2016-02-07-meteor-up-let-s-encrypt-tls)/meteor-up-let-s-encrypt-tls/meta";
import { post as digitalNomadsFirstWorldCitizens } from "@/app/[lang]/blog/(2016-01-20-digital-nomads-first-world-citizens)/digital-nomads-first-world-citizens/meta";
import { post as angelsinthehouseCom } from "@/app/[lang]/blog/(2016-01-01-angelsinthehouse-com)/angelsinthehouse-com/meta";
import { post as osxElCapitanSplitView } from "@/app/[lang]/blog/(2015-11-24-osx-el-capitan-s-split-view-is-awesome)/osx-el-capitan-s-split-view-is-awesome/meta";
import { post as howMyColleagueAlmostLostRootAccess } from "@/app/[lang]/blog/(2015-07-09-how-my-colleague-almost-lost-root-access-in-his-own-machine)/how-my-colleague-almost-lost-root-access-in-his-own-machine/meta";
import { post as deepHashTransformation } from "@/app/[lang]/blog/(2015-07-03-deep-hash-transformation-using-lambdas)/deep-hash-transformation-using-lambdas/meta";
import { post as quadruinoVideo } from "@/app/[lang]/blog/(2014-10-23-quadruino-video)/quadruino-video/meta";
import { post as sharelatex } from "@/app/[lang]/blog/(2014-10-15-sharelatex)/sharelatex/meta";
import { post as matchTwoPossibleStringsRegexp } from "@/app/[lang]/blog/(2014-05-01-match-two-possible-strings-regexp)/match-two-possible-strings-regexp/meta";
import { post as optionalParametersDefaultParameters } from "@/app/[lang]/blog/(2014-04-17-optional-parameters-and-default-parameters----ruby-1-9--)/optional-parameters-and-default-parameters----ruby-1-9--/meta";
import { post as quadruinoIsBack } from "@/app/[lang]/blog/(2014-04-14-quadruino-is-back)/quadruino-is-back/meta";
import { post as createAFileAndAllFolderStructure } from "@/app/[lang]/blog/(2014-04-01-create-a-file-and-all-the-folder-structure)/create-a-file-and-all-the-folder-structure/meta";
import { post as requestObjectInRails } from "@/app/[lang]/blog/(2014-03-20-request-object-in-rails-2-3-18)/request-object-in-rails-2-3-18/meta";
import { post as kneip } from "@/app/[lang]/blog/(2014-02-01-kneip)/kneip/meta";
import { post as putsHelloWorld } from "@/app/[lang]/blog/(2013-08-19-puts--hello--world--)/puts--hello--world--/meta";
import { post as airfishbowl } from "@/app/[lang]/blog/(2013-05-31-airfishbowl)/airfishbowl/meta";
import { post as industrialRobotArmSimulatorVideo } from "@/app/[lang]/blog/(2012-05-12-industrial-robot-arm-simulator-video)/industrial-robot-arm-simulator-video/meta";

// Draft posts
import { post as myIdealWebStack } from "@/app/[lang]/blog/(1970-01-01-my-ideal-web-stack)/my-ideal-web-stack/meta";
import { post as graphqlAuthenticationPassportjs } from "@/app/[lang]/blog/(1970-01-01-graphql-authentication---passportjs---apollo-server)/graphql-authentication---passportjs---apollo-server/meta";
import { post as cheapSimpleEncryptedPaas } from "@/app/[lang]/blog/(1970-01-01-cheap---simple---encrypted-paas-for-all-your-side-projects)/cheap---simple---encrypted-paas-for-all-your-side-projects/meta";
import { post as buildingASaasBusinessFindingTheIdea } from "@/app/[lang]/blog/(1970-01-01-building-a-saas-business-finding-the-idea)/building-a-saas-business-finding-the-idea/meta";

// All posts array, sorted newest first (drafts filtered out)
export const allPosts: BlogPost[] = [
  ideationFindingAGoodBusinessIdea,
  databaseDesignCourse,
  neverSplitTheDifferenceBookNotes,
  causeAndEffectFallacies,
  buildingAStoryBrand,
  typescriptStringToNumber,
  loonshtsBookNotes,
  covid19AnonymousLettersToPatients,
  shouldIBuyTheDip,
  softwareAutomation,
  stoicJournal,
  upworkTheWorstPlatform,
  redirector,
  hopefullySimpleWebassemblyStartingGuide,
  aws4curl,
  isWindowsAnOption2019,
  wisertag,
  deepfakesWillChallengeDemocracy,
  webassemblyLondonMeetup,
  isItAGoodTimeMigrateOsxToWindows,
  dazn,
  unicornContributor,
  designedOfficialLogoWebassembly,
  superintelligenceRuminations,
  homeawayExpedia,
  hirespaceCom,
  meteorUpLetsEncryptTls,
  digitalNomadsFirstWorldCitizens,
  angelsinthehouseCom,
  osxElCapitanSplitView,
  howMyColleagueAlmostLostRootAccess,
  deepHashTransformation,
  quadruinoVideo,
  sharelatex,
  matchTwoPossibleStringsRegexp,
  optionalParametersDefaultParameters,
  quadruinoIsBack,
  createAFileAndAllFolderStructure,
  requestObjectInRails,
  kneip,
  putsHelloWorld,
  airfishbowl,
  industrialRobotArmSimulatorVideo,
  // Draft posts (will be filtered out)
  myIdealWebStack,
  graphqlAuthenticationPassportjs,
  cheapSimpleEncryptedPaas,
  buildingASaasBusinessFindingTheIdea,
].filter((p) => !p.draft);
