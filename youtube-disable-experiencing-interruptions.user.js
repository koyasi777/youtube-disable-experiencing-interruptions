// ==UserScript==
// @name         YouTube「再生が中断されていますか？」ポップアップと再生遅延の無効化
// @name:ja      YouTube「再生が中断されていますか？」ポップアップと再生遅延の無効化
// @name:en      Disable YouTube "Experiencing interruptions?" Popup and Playback Delay
// @name:zh-CN   禁用YouTube“播放暂停，是否继续观看？”弹窗及播放延迟
// @name:zh-TW   停用YouTube「播放已暫停，是否繼續觀看？」提示視窗與播放延遲
// @name:ko      YouTube "중단되었나요?" 팝업 및 재생 지연 비활성화
// @name:fr      Désactiver la fenêtre "Lecture interrompue ?" et le délai de lecture sur YouTube
// @name:es      Desactivar el mensaje "¿Se interrumpió la reproducción?" y el retraso de reproducción en YouTube
// @name:de      Deaktiviere das YouTube-Popup "Wiedergabe unterbrochen?" und die Wiedergabeverzögerung
// @name:pt-BR   Desativar o pop-up "A reprodução foi interrompida?" e o atraso de reprodução no YouTube
// @name:ru      Отключить всплывающее окно "Воспроизведение прервано?" и задержку воспроизведения на YouTube
// @version      1.0.0
// @description         YouTubeの「再生が中断されていますか？」ポップアップ（例: "Experiencing interruptions?"）および初回再生時の遅延を自動で無効化します。
// @description:en      Automatically disables YouTube’s “Experiencing interruptions?” and “Video paused. Continue watching?” popups, as well as initial playback delay.
// @description:zh-CN   自动禁用YouTube“播放暂停，是否继续观看？”弹窗以及初始播放延迟。
// @description:zh-TW   自動停用YouTube 的「播放已暫停，是否繼續觀看？」提示與初始播放延遲。
// @description:ko      YouTube의 "중단되었나요?" 팝업 및 초기 재생 지연을 자동으로 비활성화합니다。
// @description:fr      Désactive automatiquement la fenêtre "Lecture interrompue ?" et le délai de lecture initial sur YouTube.
// @description:es      Desactiva automáticamente el mensaje "¿Se interrumpió la reproducción?" y el retraso inicial de reproducción en YouTube.
// @description:de      Deaktiviert automatisch das YouTube-Popup "Wiedergabe unterbrochen?" und die initiale Wiedergabeverzögerung.
// @description:pt-BR   Desativa automaticamente o pop-up "A reprodução foi interrompida?" e o atraso inicial de reprodução no YouTube.
// @description:ru      Автоматически отключает всплывающее окно "Воспроизведение прервано?" и начальную задержку воспроизведения на YouTube.
// @namespace    https://github.com/koyasi777/youtube-disable-experiencing-interruptions
// @author       koyasi777
// @match        https://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
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
