<?php

/**
 * @file plugins/themes/pkp-ifrs-theme/IFRSThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class IFRSThemePlugin
 * @ingroup plugins_themes_ifrs
 *
 * @brief "IFRS" theme plugin
 */

import('classes.plugins.ThemePlugin');

class IFRSThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'IFRSThemePlugin';
	}

	function getDisplayName() {
		return 'IFRS Theme';
	}

	function getDescription() {
		return 'IFRS Theme for PKP';
	}

	function getStylesheetFilename() {
		return 'ifrs-theme.css';
	}
	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
