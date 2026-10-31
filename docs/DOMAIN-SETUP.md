# Connect navarrotech.org

These instructions apply only to the new `joeynavarro/navarro-technologies` repository. Keep the existing personal site’s repository, Pages settings, and `joeynavarro.io` DNS records unchanged.

## 1. Configure the new repository

In **joeynavarro/navarro-technologies → Settings → Pages**, publish from **main / (root)**. Set **Custom domain** to `navarrotech.org` and save before changing DNS. The root `CNAME` file contains this domain; GitHub’s repository setting must also be configured.

GitHub recommends verifying ownership of the domain in the account’s Pages settings before attaching it. If GitHub supplies a verification TXT record, copy its exact host and value into the domain provider’s DNS editor and complete GitHub’s verification. Do not invent a verification token.

## 2. Add DNS records at the domain provider

For the root domain, add all four records:

| Type | Host/name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | joeynavarro.github.io |

Some providers use a blank host field instead of `@`. The `www` value has no protocol, slash, or repository name. Preserve unrelated email records such as MX, SPF, DKIM, and DMARC. Replace conflicting parked-domain web records for these exact hosts only; retain a record of the previous values first.

IPv6 is optional. If adding it, use all four GitHub addresses together with the IPv4 A records:

| Type | Host/name | Value |
| --- | --- | --- |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

Avoid wildcard records. Setting `navarrotech.org` on this project’s repository lets it use its own domain independently of the personal Pages site.

## 3. Verify DNS and HTTPS

DNS changes can take up to 24 hours. In PowerShell:

```powershell
Resolve-DnsName navarrotech.org -Type A
Resolve-DnsName www.navarrotech.org -Type CNAME
```

Confirm the root domain returns GitHub’s A record values and `www` points to `joeynavarro.github.io`. In the new repository’s Pages settings, wait for the DNS check and certificate provisioning, then enable **Enforce HTTPS** when available. Open both `https://navarrotech.org` and `https://www.navarrotech.org`; the latter should redirect to the root domain. Check the home page, contact link, logo, and narrow-screen layout.

The source configuration is not evidence that these external steps are complete. Check the repository’s **Actions** page if a deployment fails.

## Official references

Values and workflow checked on October 31, 2026:

- [GitHub: manage a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub: verify domain ownership](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [GitHub: configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

