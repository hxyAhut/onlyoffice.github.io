/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function (window, undefined) {
  var editor;
  window.Asc.plugin.init = function (text) {
    
  };

  window.Asc.plugin.button = function (id) {
    // this.executeCommand("close", "");
  };

  window.Asc.plugin.onTranslate = function () {
    // let confirm_btn = document.getElementById("confirm-btn");
    // if (confirm_btn) confirm_btn.innerHTML = window.Asc.plugin.tr("确定");
  };

  window.Asc.plugin.onThemeChanged = function (theme) {
    // window.Asc.plugin.onThemeChangedBase(theme);
    // if (theme.type.indexOf("dark") !== -1)
    //   setTimeout(() => editor.setOption("theme", "bespin"));
    // else setTimeout(() => editor.setOption("theme", "default"));
  };
})(window, undefined);
