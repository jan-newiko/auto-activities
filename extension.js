/****************************************************************************
** Auto Activities - Show activities overlay when there are no windows.
** Copyright (C) 2021  acedron <acedrons@yahoo.co.jp>
**
** This program is free software: you can redistribute it and/or modify
** it under the terms of the GNU General Public License as published by
** the Free Software Foundation, either version 3 of the License, or
** (at your option) any later version.
**
** This program is distributed in the hope that it will be useful,
** but WITHOUT ANY WARRANTY; without even the implied warranty of
** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
** GNU General Public License for more details.
**
** You should have received a copy of the GNU General Public License
** along with this program.  If not, see <https://www.gnu.org/licenses/>.
****************************************************************************/
'use strict';

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { AutoActivities } = Me.imports.autoActivities;

var autoActivities;

function init() {
  ExtensionUtils.initTranslations('auto-activities');
}

function enable() {
  autoActivities = new AutoActivities();
}

function disable() {
  autoActivities.destroy();
  autoActivities = null;
}