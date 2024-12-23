/**
 * Update version of all published packages
 */
import fs from 'node:fs/promises'
;(async () => {
  const version = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const versionWithDots =
    version.slice(0, 4) + '.' + version.slice(4, 6) + '.' + version.slice(6, 8)
  console.log('Version', versionWithDots)

  for (const file of ['index.php', 'date/index.php', 'plugin.php']) {
    console.log('Update', file)

    // YYYYMMDD

    const content = (await fs.readFile(file, 'utf8'))
      .replace(/return '[0-9]{8}'/, `return '${version}'`)
      .replace(/'version' => '[0-9]{8}'/, `'version' => '${version}'`)
      .replace(
        /'version' => '[0-9]{4}\.[0-9]{2}\.[0-9]{2}'/,
        `'version' => '${versionWithDots}'`,
      )
      .replace(/\$version = '[0-9]{8}'/, `$version = '${version}'`)
      .replace(
        /"version": "[0-9]{4}\.[0-9]{2}\.[0-9]{2}"/,
        `"version": "${versionWithDots}"`,
      )
      .replace(
        /Version: [0-9]{4}\.[0-9]{2}\.[0-9]{2}/,
        `Version: ${versionWithDots}`,
      )

    // console.log(content)

    await fs.writeFile(file, content)
  }
})().catch(console.error)
