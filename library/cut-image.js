"use strict";
(function () {
    const lc = new LibraryContent("language-java");
    const macosDownload = document.getElementsByClassName("macos_download")[0];
    const windows_download = document.getElementsByClassName("windows_download")[0];
    macosDownload.href = `https://github.com/VaneProject/cut-image/releases/download/${cut_image_version}/CutImage-${cut_image_version}.dmg`;
    windows_download.href = `https://github.com/VaneProject/cut-image/releases/download/${cut_image_version}/CutImage-${cut_image_version}.exe`;
    setLocal("https://github.com/VaneProject/cut-image/releases");
    setMainLink(lc.getLocal());
    setTitle('Cut Image');
    primaryCreate('cutimage', cut_image_version);
    setLicense('https://github.com/VaneProject/.github/blob/main/LICENSE', 'Vane');
    setDeveloper('PersesTitan');
    setLanguage('Java');
    changeIcon();
}).call(null);
