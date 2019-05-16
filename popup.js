// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

document.getElementById('fillPassengerDataADT').onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: 'sharedFunctions.js'}, function () {
            chrome.tabs.executeScript(tabs[0].id, {file: "fillAdultPassengerData.js"});
        });
    });
};

document.getElementById('fillPassengerDataCHILD').onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: 'sharedFunctions.js'}, function () {
            chrome.tabs.executeScript(tabs[0].id, {file: "fillChildPassengerData.js"});
        });
    });
};