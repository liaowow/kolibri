> Hi Kolibri team,

> I work at a youth empowerment organization for out of school children in Ghana. We have programs at local community centers where children and youth come in periodically for vocational and life skills classes or to learn independently from the resources we have available.

> Yesterday, I downloaded Kolibri at one of the centers. I spent several hours creating a class for some of our children and making user accounts for them. Then I went to import 65 GB of content and I started having problems. I clicked on the resources I wanted, and then clicked “Import” and it got stuck on the screen telling me it was preparing the content. It just stayed like that for a long time and didn’t change.

> HELP!!!

> Moses

### Internal Communication

First, I would like to know if the team has experienced similar issues before? If so, I would try to implement the solutions that worked before. If not, I would check the server that hosts the files and its HTTP status code (assuming the transfer was done via HTTP protocol rather than FTP). If it's a server error, I would trace the route responsible for GET requests and corresponding functions, see if there's any bug. If it's a client error, I might ask Moses clarifying questions, as we have no control over client network environment (he might have a network glitch, or the download was interrupted by a browser plugin, etc.)

### Email Response

Hi Moses,

Thanks for letting us know. Our team have been informed and are checking to see there's any issue with Kolibri platform.

In the meantime, could you tell us how long the screen was stuck on the "preparing the content" mode? Have you tried refreshing the page and importing it again? Sometimes files as large as 65GB take longer to transfer, and might get interrupted by other concurrent operations during the transferring process.

Again, we are working on fixing the issue as soon as we can. We will keep you updated.

Best,
Kolibri Team