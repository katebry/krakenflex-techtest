# Kraken Flex tech test
My Kraken Flex tech test response 💪🏻🐙

## Setup

First, please clone the repo onto your local machine. 

You can do this by clicking the green `Code` button and selecting one of the options from the drop down. 

Once you have the repo open locally, run the command `npm i` from your terminal. 

You will also need to create a `.env` file in the root of your repository.

Once created, add in the following, replacing the `<mock values>` with the string values sent to you via email:

```
API_KEY=<API KEY value goes here>
URL=<URL value goes here>
SITE_ID=<Site id value goes here>
```



## Tasks

1. Retrieve all outages from the `GET /outages` endpoint ✅
2. Retrieve information from the `GET /site-info/{siteId}` endpoint for a certain site ✅
3. Filter out any outages that began before `2022-01-01T00:00:00.000Z`, or that don't have an ID that is in the list of devices in the Site Information ✅ 
4. For the remaining filtered outages, the display name of the device in the site information should be attached to each appropriate outage
5. Send this compiled list of outages to the `POST /site-outages/{siteId}` endpoint 

