module.exports = {
  siteUrl: 'https://www.hamkoders.com',
  generateRobotsTxt: true,

  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/services'),
    await config.transform(config, '/contact-us'),
    await config.transform(config, '/industries'),
    await config.transform(config, '/portfolio'),
  ],
};