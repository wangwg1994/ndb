/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const ndbDir = path.join(os.homedir(), '.ndb');
if (!fs.existsSync(ndbDir))
  fs.mkdirSync(ndbDir);
const nddStoreDir = path.join(ndbDir, 'ndd_store');
if (!fs.existsSync(nddStoreDir))
  fs.mkdirSync(nddStoreDir);

process.env.NDD_STORE = nddStoreDir;
process.env.NDD_WAIT_FOR_CONNECTION = 0;
process.env.NODE_OPTIONS = (process.env.NODE_OPTIONS || '') + ' -r ndb-inspect';

require('./preload.js');
