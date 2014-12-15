isProdEnv = function () {
    if (process.env.ROOT_URL == "http://localhost:3000/") {
        return false;
    } else {
        return true;
    }
};

ServiceConfiguration.configurations.remove({
    service: "google"
});
if (isProdEnv()) {
    ServiceConfiguration.configurations.insert({
        service: "google",
        clientId: "1031725881861-e873csejp0qrieh7f9m9k0pri4n2ga1t.apps.googleusercontent.com",
        secret: "Zx02t8I47SIdPQAh_vSyahz-"
    });
} else {
    ServiceConfiguration.configurations.insert({
        service: "google",
        clientId: "1031725881861-r4m8231fh21mm78ukhsoju54p17hn26h.apps.googleusercontent.com",
        secret: "vCL_EX5W7dTNJkCeXCRn8Prx"
    });
}