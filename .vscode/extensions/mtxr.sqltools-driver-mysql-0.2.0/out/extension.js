var __defineProperty=Object.defineProperty;var __hasOwnProperty=Object.prototype.hasOwnProperty;var __assign=Object.assign;var __commonJS=(callback,module2)=>()=>{if(!module2){module2={exports:{}};callback(module2.exports,module2)}return module2.exports};var __markAsModule=target=>{return __defineProperty(target,"__esModule",{value:!0})};var __export=(target,all)=>{__markAsModule(target);for(var name2 in all)__defineProperty(target,name2,{get:all[name2],enumerable:!0})};var __exportStar=(target,module2)=>{__markAsModule(target);if(typeof module2==="object"||typeof module2==="function"){for(let key in module2)if(!__hasOwnProperty.call(target,key)&&key!=="default")__defineProperty(target,key,{get:()=>module2[key],enumerable:!0})}return target};var __toModule=module2=>{if(module2&&module2.__esModule)return module2;return __exportStar(__defineProperty({},"default",{value:module2,enumerable:!0}),module2)};var require_package=__commonJS((exports2,module2)=>{module2.exports={name:"sqltools-driver-mysql",displayName:"SQLTools MySQL/MariaDB",description:"SQLTools MySQL/MariaDB",version:"0.2.0",engines:{vscode:"^1.42.0"},publisher:"mtxr",license:"MIT",private:!0,repository:{type:"git",url:"https://github.com/mtxr/vscode-sqltools.git",directory:"packages/drivers.mysql"},bugs:{url:"https://github.com/mtxr/vscode-sqltools/labels/mysql"},keywords:["sqltools-driver","mysql","mariadb"],galleryBanner:{theme:"light",color:"#fafafa"},icon:"icon.png",categories:["Programming Languages","Snippets","Formatters","Other"],extensionDependencies:["mtxr.sqltools"],activationEvents:["*","onLanguage:sql","onCommand:sqltools.*"],main:"./out/extension.js",scripts:{clean:"rimraf -rf out dist *.vsix",predev:"yarn run clean",dev:'concurrently -k "npm:dev:*"',prebuild:"yarn run clean && yarn run tsc-check",build:'NODE_ENV=production concurrently "npm:build:*"',"build:ext":`yarn run compile:ext --define:process.env.NODE_ENV="'production'" --minify-whitespace`,"build:ls":`yarn run compile:ls --define:process.env.NODE_ENV="'production'" --minify-whitespace`,esbuild:"esbuild --platform=node --tsconfig=./tsconfig.json --external:vscode --log-level=error --color=true --format=cjs",prepackage:"yarn run build",package:"vsce package --yarn -o .","compile:ext":`yarn run esbuild --bundle ./src/extension.ts --outfile=./out/extension.js --target=es2017 --define:process.env.PRODUCT="'ext'"`,"compile:ls":`yarn run esbuild --bundle ./src/ls/plugin.ts --outfile=./out/ls/plugin.js --target=es2015 --define:process.env.PRODUCT="'ls'"`,"tsc-check":"yarn run ts --noEmit --preserveWatchOutput",watch:'concurrently "npm:watch:*"',"watch:ext":`yarn run compile:ext --define:process.env.NODE_ENV="'development'" --sourcemap`,"watch:ls":`yarn run compile:ls --define:process.env.NODE_ENV="'development'" --sourcemap`,"dev:tsc":"yarn run tsc-check -w","dev:fw":'chokidar "src/**/*" "*.json" --initial --silent -c "yarn run watch"',ts:"tsc -p ."},devDependencies:{"@mysql/xdevapi":"^8.0.20","@sqltools/base-driver":"latest","@types/lodash":"^4.14.123","@types/mysql":"^2.15.12","@types/vscode":"^1.42.0","compare-versions":"3.6.0",concurrently:"^5.2.0","chokidar-cli":"^2.1.0",esbuild:"0.6.26",lodash:"^4.17.19",mysql:"^2.18.1",rimraf:"^3.0.2",typescript:"^3.7.3",vsce:"1.77.0"}}});const DRIVER_ALIASES=[{displayName:"MySQL",value:"MySQL"},{displayName:"MariaDB",value:"MariaDB"}];__export(exports,{activate:()=>activate,deactivate:()=>deactivate});const vscode=__toModule(require("vscode"));const{publisher,name}=require_package();const driverName="MySQL/MariaDB";async function activate(extContext){const sqltools=vscode.extensions.getExtension("mtxr.sqltools");if(!sqltools){throw new Error("SQLTools not installed")}await sqltools.activate();const api=sqltools.exports;const extensionId=`${publisher}.${name}`;const plugin={extensionId,name:`${driverName} Plugin`,type:"driver",async register(extension){extension.resourcesMap().set(`driver/${DRIVER_ALIASES[0].value}/icons`,{active:extContext.asAbsolutePath("icons/active.png"),default:extContext.asAbsolutePath("icons/default.png"),inactive:extContext.asAbsolutePath("icons/inactive.png")});extension.resourcesMap().set(`driver/${DRIVER_ALIASES[1].value}/icons`,{active:extContext.asAbsolutePath("icons/mariadb/active.png"),default:extContext.asAbsolutePath("icons/mariadb/default.png"),inactive:extContext.asAbsolutePath("icons/mariadb/inactive.png")});DRIVER_ALIASES.forEach(({value})=>{extension.resourcesMap().set(`driver/${value}/extension-id`,extensionId);extension.resourcesMap().set(`driver/${value}/connection-schema`,extContext.asAbsolutePath("connection.schema.json"));extension.resourcesMap().set(`driver/${value}/ui-schema`,extContext.asAbsolutePath("ui.schema.json"))});await extension.client.sendRequest("ls/RegisterPlugin",{path:extContext.asAbsolutePath("out/ls/plugin.js")})}};api.registerPlugin(plugin);return{driverName,parseBeforeSaveConnection:({connInfo})=>{const propsToRemove=["connectionMethod","id","usePassword"];if(connInfo.usePassword){if(connInfo.usePassword.toString().toLowerCase().includes("ask")){propsToRemove.push("password")}else if(connInfo.usePassword.toString().toLowerCase().includes("empty")){connInfo.password="";propsToRemove.push("askForPassword")}else if(connInfo.usePassword.toString().toLowerCase().includes("save")){propsToRemove.push("askForPassword")}}propsToRemove.forEach(p=>delete connInfo[p]);return connInfo},parseBeforeEditConnection:({connInfo})=>{const formData=__assign(__assign({},connInfo),{connectionMethod:"Server and Port"});if(connInfo.socketPath){formData.connectionMethod="Socket File"}else if(connInfo.connectString){formData.connectionMethod="Connection String"}if(connInfo.askForPassword){formData.usePassword="Ask on connect";delete formData.password}else if(typeof connInfo.password==="string"){delete formData.askForPassword;formData.usePassword=connInfo.password?"Save password":"Use empty password"}return formData},driverAliases:DRIVER_ALIASES}}function deactivate(){}