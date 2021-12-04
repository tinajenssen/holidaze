module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("dls6lkilg"),
      api_key: env("149412388261177"),
      api_secret: env("HegAX6TgewcngrNrCVE_cNZ7AZ0"),
    },
  },
});
