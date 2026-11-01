# Navarro Technologies

An original, responsive Jekyll company website for Navarro Technologies, focused on **field IT technician work through Field Nation**. The main services are printer service, low-voltage cabling, server and rack setup, TVs, wireless access points, and computer installation and initialization. It is built for **navarrotech.org** in the separate GitHub repository, **[joeynavarro/navarro-technologies](https://github.com/joeynavarro/navarro-technologies)**. The design follows the owner’s latest [Ukko reference](https://demo.cocobasic.com/ukko-react/): a fixed right sidebar, large coral typography, pale backgrounds, a prominent portrait, and scrolling sections. This original Jekyll implementation contains no paid template source or demo assets.

## Keep the existing personal site separate

Publish this folder to a **new repository named `navarro-technologies`**. The existing `joeynavarro/joeynavarro.github.io` repository and its custom domain, `joeynavarro.io`, must remain unchanged. Do not copy this source into that repository, rename that repository, or change its Pages settings.

## Preview locally

Use Ruby with working RubyGems and Bundler. From this directory:

```powershell
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open the local address shown by Jekyll, normally `http://127.0.0.1:4000`. For a production build:

```powershell
bundle exec jekyll build --strict_front_matter
```

The site uses standard Jekyll and Liquid with no custom plugins. Plain CSS and JavaScript do not require a separate front-end build.

## Publish on GitHub Pages

1. Create the new public repository `joeynavarro/navarro-technologies`, then push the contents of this folder to its `main` branch.
2. In **that new repository**, open **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**, select **main** and **/(root)**, then save.
4. Set its **Custom domain** to `navarrotech.org`, then configure the domain records described in [Domain setup](docs/DOMAIN-SETUP.md).
5. Wait for the Pages build and domain checks to succeed. Enable **Enforce HTTPS** when GitHub makes it available.

The `CNAME` file and `_config.yml` are prepared for the custom domain. They do not prove that a repository, Pages deployment, DNS, or HTTPS certificate is already configured. See [GitHub’s publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Update content

- Company name, description, contact address, and canonical domain: `_config.yml`.
- Main content and sections: `index.html`.
- Completed-job portfolio and dated history count: `_data/completed_jobs.json`. Add only verified completed assignments, keeping client and site details private.
- Shared page wrapper and metadata: `_layouts/default.html`.
- Styles and behavior: `assets/css/` and `assets/js/`.
- Logo and other artwork: `assets/images/`.

The owner confirmed the company contact as **hello@joeynavarro.io**, **915-910-9422**. The configured [Field Nation profile](https://app.fieldnation.com/p/1097046) lists **El Paso, Texas** and was supplied by the owner; viewing it may require sign-in. The primary focus is field IT technician work through Field Nation. The six service sections describe concrete work supplied by the owner: service for Zebra, Epson poster, Fujifilm, and Honeywell printers; low-voltage cabling; server setup including racks; TVs; access-point installation, initialization, and configuration; and computer installation and initialization. These are service descriptions, not claims about completed customer projects, manufacturer authorization, or certifications. Data consulting is secondary background context. Add credentials, coverage areas, customer names, ratings, and completed-project details only after verification.

## Documentation

- [Domain setup](docs/DOMAIN-SETUP.md)
- [Content sources and publication notes](docs/CONTENT-SOURCES.md)

The `docs` folder, this README, and development dependencies are excluded from the published site.

