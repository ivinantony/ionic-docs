(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[24979],{35641:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return d},toc:function(){return l},default:function(){return s}});var o=t(22122),i=t(19756),a=(t(67294),t(3905)),r={},d={unversionedId:"troubleshooting/debugging",id:"troubleshooting/debugging",isDocsHomePage:!1,title:"Debugging",description:"Live Reload",source:"@site/docs/troubleshooting/debugging.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/debugging",permalink:"/docs/troubleshooting/debugging",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/troubleshooting/debugging.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Security",permalink:"/docs/techniques/security"},next:{title:"Build Errors",permalink:"/docs/troubleshooting/build"}},l=[{value:"Live Reload",id:"live-reload",children:[]},{value:"iOS and Safari",id:"ios-and-safari",children:[]},{value:"Android and Chrome",id:"android-and-chrome",children:[]},{value:"Debugging with Visual Studio locally in Chrome (both Android &amp; iOS)",id:"debugging-with-visual-studio-locally-in-chrome-both-android--ios",children:[]},{value:"Debugging with Visual Studio Code in Android",id:"debugging-with-visual-studio-code-in-android",children:[]}],u={toc:l};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/akh6V6Yw1lw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"live-reload"},"Live Reload"),(0,a.kt)("p",null,"Live Reload is useful for debugging native functionality (such as plugins) on device hardware. Rather than deploy a new native binary each time you make a code change, it reloads the browser (or WebView) when changes in the app are detected. ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli/livereload"},"Learn more here"),"."),(0,a.kt)("h2",{id:"ios-and-safari"},"iOS and Safari"),(0,a.kt)("p",null,"Safari can be used to debug an Ionic app on a connected iOS device or iOS simulator."),(0,a.kt)("p",null,"First, on the iOS device, enable ",(0,a.kt)("strong",{parentName:"p"},"Web Inspector")," from Settings > Safari > Advanced."),(0,a.kt)("p",null,"Next, open Safari on a Mac then enable ",(0,a.kt)("strong",{parentName:"p"},"Show Develop menu in menu bar")," under Safari > Preferences > Advanced."),(0,a.kt)("p",null,"Run the iOS simulator or connect your iOS device to your Mac, then run the Ionic app that you want to debug."),(0,a.kt)("p",null,"Within Safari, select ",(0,a.kt)("strong",{parentName:"p"},"Develop")," in the toolbar. In the dropdown menu options, you should see the name of your device and app. Hover over the app name and click on ",(0,a.kt)("strong",{parentName:"p"},"localhost"),". This will open a new window with the Safari Developer Tools - use them to inspect and debug the Ionic app running on your device."),(0,a.kt)("h2",{id:"android-and-chrome"},"Android and Chrome"),(0,a.kt)("p",null,"Use Google Chrome's DevTools to debug an app when it is running in the browser using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic serve")," command, deployed to an emulator, or on a physical device."),(0,a.kt)("p",null,"To inspect a physical device, first you need to have developer mode enabled. Connect your Android device to the computer then go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > About")," scroll to ",(0,a.kt)("inlineCode",{parentName:"p"},"Build Number")," and tap that 7 times. This will activate a new option in the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," menu called ",(0,a.kt)("strong",{parentName:"p"},"Developer Options"),"."),(0,a.kt)("p",null,"Next, go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > Developer Options")," and ensure that the developer options switch is toggled on. Scroll down to ",(0,a.kt)("strong",{parentName:"p"},"USB Debugging")," and ensure that it is also enabled. Developer Options & USB Debugging are enabled by default in the Android emulator."),(0,a.kt)("p",null,"Open the Chrome browser and navigate to the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://inspect/#devices"),". Your connected Android device should show up in the list of Remote Targets."),(0,a.kt)("p",null,"On your device, open the Ionic app that you would like to debug using Chrome."),(0,a.kt)("p",null,"With your app running on the device, head back to Chrome and click on ",(0,a.kt)("strong",{parentName:"p"},"inspect")," under your device in the list of remote targets. This will open the Chrome Developer Tools in a new window. You will then be able to use all of the Chrome DevTools to debug the application as it runs on your device."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The app preview may not automatically appear when you open Chrome Developer Tools due to a minor bug. To make it appear, click on the ",(0,a.kt)("strong",{parentName:"p"},"Elements")," tab then click on any DOM element then toggle off and on any CSS rule and the app preview window will appear.")),(0,a.kt)("h2",{id:"debugging-with-visual-studio-locally-in-chrome-both-android--ios"},"Debugging with Visual Studio locally in Chrome (both Android & iOS)"),(0,a.kt)("a",{href:"https://code.visualstudio.com/",target:"_blank"},"Visual Studio Code")," can also be used to debug an Ionic app running in the Chrome web browser.",(0,a.kt)("p",null,"To do this, run your app in the browser using ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic serve"),". Take note of the port that your app is running on. Next, open your Ionic project using Visual Studio Code. "),(0,a.kt)("p",null,"In the far-left vertical menu within VS Code, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," icon. If you are configuring this for the first time in your project, click on the option to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," file. Select ",(0,a.kt)("strong",{parentName:"p"},"Chrome")," from the environment options dropdown. This will automatically generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," file with configurations for launching Chrome against localhost."),(0,a.kt)("p",null,"Make sure that the port used in the url property of your ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," file matches the port that you observed earlier when you ran ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic serve"),". Using an incorrect port number will not work."),(0,a.kt)("p",null,"In the debug target dropdown menu, select ",(0,a.kt)("strong",{parentName:"p"},"Launch against Chrome"),", then click run. This will open a new instance of the Chrome browser and VS code will attach to it. You can set breakpoints and use the other debugging tools within VS Code while your app is running in Chrome."),(0,a.kt)("h2",{id:"debugging-with-visual-studio-code-in-android"},"Debugging with Visual Studio Code in Android"),(0,a.kt)("a",{href:"https://code.visualstudio.com/",target:"_blank"},"Visual Studio Code")," has a dedicated plugin for debugging apps that run in an Android WebView.",(0,a.kt)("a",{href:"https://marketplace.visualstudio.com/items?itemName=mpotthoff.vscode-android-webview-debug",target:"_blank"},"The plugin")," creates a bridge between the device and the Visual Studio Code developer tools and permits debugging right from the editor.",(0,a.kt)("p",null,"In order to use this plugin to debug your Ionic apps, first install it then start your app in the Android emulator or connect your Android device and run the app. You may need to enable USB debugging on your Android device."),(0,a.kt)("p",null,"In the root of your Ionic project, create a folder called ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode")," and inside that folder create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json"),". Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json"),", enter the following code to configure the plugin to debug Ionic apps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "android-webview",\n            "request": "attach",\n            "name": "Attach to Android WebView",\n            "webRoot": "${workspaceFolder}/www",\n            "sourceMaps": true,\n            "sourceMapPathOverrides": {\n                "webpack:/*": "${workspaceFolder}/*"\n            }\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"Next, launch the debugging process, selecting your device and Ionic app. VS Code will attach to both the Android device and Ionic app and you can now debug your app, which includes setting breakpoints."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are unable to set breakpoints and get an error saying, ",(0,a.kt)("strong",{parentName:"p"},'"Breakpoint ignored because generated code not found (source map problem?)"')," it means that the paths to the transpiled javascript files are incorrect. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},".scripts")," command in the Debug console to see the loaded scripts. Make sure the paths of the scripts are correct  by experimenting with different values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceMapPathOverrides")," key in your ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," configuration file.")))}s.isMDXComponent=!0}}]);