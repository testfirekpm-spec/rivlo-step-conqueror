<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap — Rivlo</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a2e; margin: 0; padding: 40px 20px; background: #f8f9fa; }
          .container { max-width: 960px; margin: 0 auto; }
          h1 { font-size: 24px; font-weight: 700; margin-bottom: 4px; }
          p.desc { color: #6b7280; font-size: 14px; margin-bottom: 24px; }
          p.count { color: #6b7280; font-size: 13px; margin-bottom: 16px; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.08); }
          th { background: #1a1a2e; color: #fff; text-align: left; padding: 12px 16px; font-size: 12px; text-transform: uppercase; letter-spacing: .05em; }
          td { padding: 10px 16px; border-bottom: 1px solid #e5e7eb; font-size: 13px; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f1f5f9; }
          a { color: #6366f1; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .priority { display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; }
          .p-high { background: #dcfce7; color: #166534; }
          .p-mid { background: #fef9c3; color: #854d0e; }
          .p-low { background: #f3f4f6; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p class="desc">This sitemap is generated to help search engines like Google and Bing discover and index all pages on <strong>rivlo.3bytes.org</strong>.</p>
          <p class="count">Number of URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></p>
          <table>
            <thead>
              <tr>
                <th style="width:50%">URL</th>
                <th>Priority</th>
                <th>Change Freq</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td>
                    <xsl:variable name="p" select="sitemap:priority"/>
                    <span>
                      <xsl:attribute name="class">
                        priority <xsl:choose>
                          <xsl:when test="$p &gt;= 0.8">p-high</xsl:when>
                          <xsl:when test="$p &gt;= 0.5">p-mid</xsl:when>
                          <xsl:otherwise>p-low</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>