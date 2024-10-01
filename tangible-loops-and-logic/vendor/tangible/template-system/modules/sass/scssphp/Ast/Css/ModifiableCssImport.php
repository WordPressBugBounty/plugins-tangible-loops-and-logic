<?php

/**
 * SCSSPHP
 *
 * @copyright 2012-2020 Leaf Corcoran
 *
 * @license http://opensource.org/licenses/MIT MIT
 *
 * @link http://scssphp.github.io/scssphp
 */

namespace Tangible\ScssPhp\Ast\Css;

use Tangible\ScssPhp\SourceSpan\FileSpan;

/**
 * A modifiable version of {@see CssImport} for use in the evaluation step.
 *
 * @internal
 */
final class ModifiableCssImport extends ModifiableCssNode implements CssImport
{
    /**
     * The URL being imported.
     *
     * This includes quotes.
     *
     * @var CssValue<string>
     * @readonly
     */
    private $url;

    /**
     * @var CssValue<string>|null
     * @readonly
     */
    private $modifiers;

    /**
     * @var FileSpan
     * @readonly
     */
    private $span;

    /**
     * @param CssValue<string>         $url
     * @param FileSpan                 $span
     * @param CssValue<string>|null    $modifiers
     */
    public function __construct(CssValue $url, FileSpan $span, ?CssValue $modifiers = null)
    {
        $this->url = $url;
        $this->modifiers = $modifiers;
        $this->span = $span;
    }

    public function getUrl(): CssValue
    {
        return $this->url;
    }

    public function getModifiers(): ?CssValue
    {
        return $this->modifiers;
    }

    public function getSpan(): FileSpan
    {
        return $this->span;
    }

    public function accept($visitor)
    {
        return $visitor->visitCssImport($this);
    }
}
