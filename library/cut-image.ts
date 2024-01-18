(function(): void {
    const lc = new LibraryContent("language-java");

    const macosDownload: HTMLAnchorElement =
        document.getElementsByClassName("macos_download")[0] as HTMLAnchorElement;
    const windows_download: HTMLAnchorElement =
        document.getElementsByClassName("windows_download")[0] as HTMLAnchorElement;
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