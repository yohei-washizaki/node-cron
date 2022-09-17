import cron from 'node-cron';

cron.schedule(`10 * * * *`, async () => {
  console.log(`running your task...`);
});
