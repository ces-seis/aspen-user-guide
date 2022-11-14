import lume from "lume/mod.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import basePath from "lume/plugins/base_path.ts";

const gh_org = "ces-seis";
const gh_repo = "aspen-user-guide";
const site_url = "https://" + gh_org + ".github.io/" + gh_repo;

const site = lume({
    src: "./src",
    // GitHub Pages requires that the site be published to /docs
    dest: "./docs",
    location: new URL(site_url),
});

site.copy("assets", "assets");

site.use(basePath());
site.use(resolveUrls());

export default site;
