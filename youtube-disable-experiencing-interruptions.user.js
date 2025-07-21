// ==UserScript==
// @name         YouTube「再生が中断されていますか？」ポップアップ無効化
// @name:ja      YouTube「再生が中断されていますか？」ポップアップ無効化
// @name:en      Disable YouTube "Experiencing interruptions?" Popup
// @name:zh-CN   禁用YouTube“播放暂停，是否继续观看？”弹窗
// @name:zh-TW   停用YouTube「播放已暫停，是否繼續觀看？」提示視窗
// @name:ko      YouTube "중단되었나요?" 팝업 비활성화
// @name:fr      Désactiver la fenêtre "Lecture interrompue ?" sur YouTube
// @name:es      Desactivar el mensaje "¿Se interrumpió la reproducción?" en YouTube
// @name:de      Deaktiviere das YouTube-Popup "Wiedergabe unterbrochen?"
// @name:pt-BR   Desativar o pop-up "A reprodução foi interrompida?" no YouTube
// @name:ru      Отключить всплывающее окно "Воспроизведение прервано?" на YouTube
// @version      1.0.0
// @description         YouTubeの「再生が中断されていますか？」ポップアップ（例: "Experiencing interruptions?"）を自動で無効化します。
// @description:en      Automatically disables YouTube’s “Experiencing interruptions?” and “Video paused. Continue watching?” popups.
// @description:zh-CN   自动禁用YouTube“播放暂停，是否继续观看？”弹窗。
// @description:zh-TW   自動停用YouTube 的「播放已暫停，是否繼續觀看？」提示。
// @description:ko      YouTube의 "중단되었나요?" 팝업을 자동 비활성화합니다.
// @description:fr      Désactive automatiquement la fenêtre "Lecture interrompue ?" sur YouTube.
// @description:es      Desactiva automáticamente el mensaje "¿Se interrumpió la reproducción?" en YouTube.
// @description:de      Deaktiviert automatisch das YouTube-Popup "Wiedergabe unterbrochen?".
// @description:pt-BR   Desativa automaticamente o pop-up "A reprodução foi interrompida?" no YouTube.
// @description:ru      Автоматически отключает всплывающее окно "Воспроизведение прервано?" на YouTube.
// @namespace    https://github.com/koyasi777/youtube-disable-experiencing-interruptions
// @author       koyasi777
// @match        https://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/koyasi777/youtube-disable-experiencing-interruptions
// @supportURL   https://github.com/koyasi777/youtube-disable-experiencing-interruptions/issues
// @icon         https://www.youtube.com/s/desktop/fe2e5a86/img/favicon.ico
// ==/UserScript==

(function () {
    'use strict';

    const isWatchPage = location.pathname.startsWith('/watch');
    if (!isWatchPage) return;

    Object.defineProperty(window, 'ytInitialData', {
        configurable: true,
        set(value) {
            const patched = undefined;

            Object.defineProperty(window, 'ytInitialData', {
                value: patched,
                writable: false,
                configurable: true
            });
        },
        get() {
            return undefined;
        }
    });
})();
