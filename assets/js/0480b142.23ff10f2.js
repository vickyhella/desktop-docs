"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[836],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,k=c["".concat(l,".").concat(u)]||c[u]||h[u]||a;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3584:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"FAQ"},l=void 0,d={unversionedId:"faq",id:"faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/faq.md",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"rdctl Command Reference",permalink:"/references/rdctl-command-reference"},next:{title:"Troubleshooting Tips",permalink:"/troubleshooting-tips"}},p=[{value:"<strong>Q: Is Rancher Desktop a desktop version of Rancher?</strong>",id:"q-is-rancher-desktop-a-desktop-version-of-rancher",children:[],level:4},{value:"<strong>Q: Is there a Kubernetes Cluster Explorer available in Rancher Desktop?</strong>",id:"q-is-there-a-kubernetes-cluster-explorer-available-in-rancher-desktop",children:[],level:4},{value:"<strong>Q: Can I have Docker Desktop installed alongside Rancher Desktop?</strong>",id:"q-can-i-have-docker-desktop-installed-alongside-rancher-desktop",children:[],level:4},{value:"<strong>Q: How can I perform a clean uninstall of Rancher Desktop?</strong>",id:"q-how-can-i-perform-a-clean-uninstall-of-rancher-desktop",children:[],level:4},{value:"<strong>Q: What support, if any, is available for DNS over VPN on Windows?</strong>",id:"q-what-support-if-any-is-available-for-dns-over-vpn-on-windows",children:[],level:4},{value:"<strong>Q: What does the &quot;WSL Integration&quot; tab do?</strong>",id:"q-what-does-the-wsl-integration-tab-do",children:[],level:4},{value:"<strong>Q: Where can I find detailed logs?</strong>",id:"q-where-can-i-find-detailed-logs",children:[],level:4},{value:"<strong>Q: How can I enable the dashboard for the Traefik ingress controller?</strong>",id:"q-how-can-i-enable-the-dashboard-for-the-traefik-ingress-controller",children:[],level:4},{value:"<strong>Q: How can I disable Traefik, and will doing so remove Traefik resources?</strong>",id:"q-how-can-i-disable-traefik-and-will-doing-so-remove-traefik-resources",children:[],level:4},{value:"<strong>Q: Is there support for internal container port forwarding?</strong>",id:"q-is-there-support-for-internal-container-port-forwarding",children:[],level:4},{value:"<strong>Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?</strong>",id:"q-does-file-sharing-work-similarly-to-docker-desktop-do-i-have-to-do-any-additional-configuration-to-mount-volumes-to-vms",children:[],level:4},{value:"<strong>Q: Can containers reach back to host services via <code>host.docker.internal</code>?</strong>",id:"q-can-containers-reach-back-to-host-services-via-hostdockerinternal",children:[],level:4},{value:"<strong>Q: I don&#39;t need the Kubernetes cluster deployed by Rancher Desktop; how do I disable it to save resources?</strong>",id:"q-i-dont-need-the-kubernetes-cluster-deployed-by-rancher-desktop-how-do-i-disable-it-to-save-resources",children:[],level:4},{value:"<strong>Q: What&#39;s happening to the Kubernetes Image Manager (kim)?</strong>",id:"q-whats-happening-to-the-kubernetes-image-manager-kim",children:[],level:4},{value:"<strong>Q: Running <code>brew install rancher</code> is failing with a <code>It seems there is already a Binary at &#39;/usr/local/bin/&lt;BINARY&gt;&#39;</code> error, why?</strong>",id:"q-running-brew-install-rancher-is-failing-with-a-it-seems-there-is-already-a-binary-at-usrlocalbinbinary-error-why",children:[],level:4},{value:"Q: I installed <code>nerdctl</code> through the Arch User Repository, but it doesn&#39;t work with Rancher Desktop, why?",id:"q-i-installed-nerdctl-through-the-arch-user-repository-but-it-doesnt-work-with-rancher-desktop-why",children:[],level:4},{value:"<strong>Q: The tools on the Support Utilities page are not installed and I see a <code>Insufficient permission to manipulate /usr/local/bin</code> error, how do I fix it?</strong>",id:"q-the-tools-on-the-support-utilities-page-are-not-installed-and-i-see-a-insufficient-permission-to-manipulate-usrlocalbin-error-how-do-i-fix-it",children:[],level:4},{value:"<strong>Q: Is Cygwin compatible with Rancher Desktop?</strong>",id:"q-is-cygwin-compatible-with-rancher-desktop",children:[],level:4},{value:"<strong>Q: How can I add Rancher Desktop to the startup programs list on Windows?</strong>",id:"q-how-can-i-add-rancher-desktop-to-the-startup-programs-list-on-windows",children:[],level:4},{value:"<strong>Q: Where does Rancher Desktop actually put the data volumes?</strong>",id:"q-where-does-rancher-desktop-actually-put-the-data-volumes",children:[],level:4}],h={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop."),(0,a.kt)("h4",{id:"q-is-rancher-desktop-a-desktop-version-of-rancher"},(0,a.kt)("strong",{parentName:"h4"},"Q: Is Rancher Desktop a desktop version of Rancher?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," While ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," and ",(0,a.kt)("a",{parentName:"p",href:"https://rancherdesktop.io/"},"Rancher Desktop")," share the ",(0,a.kt)("em",{parentName:"p"},"Rancher")," name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other."),(0,a.kt)("h4",{id:"q-is-there-a-kubernetes-cluster-explorer-available-in-rancher-desktop"},(0,a.kt)("strong",{parentName:"h4"},"Q: Is there a Kubernetes Cluster Explorer available in Rancher Desktop?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Yes, the Rancher Dashboard is included as a feature preview in the release 1.2.1. Invoke the dashboard by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Dashboard")," option in the system tray menu."),(0,a.kt)("p",null,"To learn more about Rancher Desktop, click ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/"},"here"),".\nTo learn more about Rancher, click ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/why-rancher"},"here"),"."),(0,a.kt)("h4",{id:"q-can-i-have-docker-desktop-installed-alongside-rancher-desktop"},(0,a.kt)("strong",{parentName:"h4"},"Q: Can I have Docker Desktop installed alongside Rancher Desktop?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Yes, but they cannot be run at the same time as both Rancher Desktop and Docker Desktop use the same Docker socket (",(0,a.kt)("inlineCode",{parentName:"p"},"/var/run/docker.sock"),"). Before starting one, be sure to stop the other first."),(0,a.kt)("h4",{id:"q-how-can-i-perform-a-clean-uninstall-of-rancher-desktop"},(0,a.kt)("strong",{parentName:"h4"},"Q: How can I perform a clean uninstall of Rancher Desktop?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," First, perform a ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/features#factory-reset"},"Factory Reset"),", and then you will uninstall the app. The uninstall process varies based on the operating system. For more information, please refer ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation"},"here"),"."),(0,a.kt)("h4",{id:"q-what-support-if-any-is-available-for-dns-over-vpn-on-windows"},(0,a.kt)("strong",{parentName:"h4"},"Q: What support, if any, is available for DNS over VPN on Windows?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," An alternative DNS resolver for Windows has been implemented to address some of the VPN issues on Windows. It should support DNS lookup over VPN connections. It has to be enabled manually by editing an internal ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1899#issuecomment-1109128277"},"configuration file"),"."),(0,a.kt)("h4",{id:"q-what-does-the-wsl-integration-tab-do"},(0,a.kt)("strong",{parentName:"h4"},'Q: What does the "WSL Integration" tab do?')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," This makes the Kubernetes configuration accessible in the displayed WSL distributions so that you can use commands such as ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to communicate with Kubernetes."),(0,a.kt)("h4",{id:"q-where-can-i-find-detailed-logs"},(0,a.kt)("strong",{parentName:"h4"},"Q: Where can I find detailed logs?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Click on the ",(0,a.kt)("strong",{parentName:"p"},"Troubleshooting")," tab, then click on ",(0,a.kt)("strong",{parentName:"p"},"Show Logs"),"."),(0,a.kt)("h4",{id:"q-how-can-i-enable-the-dashboard-for-the-traefik-ingress-controller"},(0,a.kt)("strong",{parentName:"h4"},"Q: How can I enable the dashboard for the Traefik ingress controller?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," The Traefik dashboard is not exposed by default, for security reasons. However, it is possible to expose the dashboard in multiple ways. For instance, using ",(0,a.kt)("inlineCode",{parentName:"p"},"port-forward")," will enable dashboard access:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl port-forward -n kube-system $(kubectl -n kube-system get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000\n')),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:9000/dashboard/"},"http://127.0.0.1:9000/dashboard/")," in your browser to view the Traefik dashboard."),(0,a.kt)("h4",{id:"q-how-can-i-disable-traefik-and-will-doing-so-remove-traefik-resources"},(0,a.kt)("strong",{parentName:"h4"},"Q: How can I disable Traefik, and will doing so remove Traefik resources?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Yes, you can disable Traefik in order to free up port 80 and 443 for alternate ingress configuration. Disabling Traefik will ",(0,a.kt)("em",{parentName:"p"},"not")," delete existing resources. By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Traefik")," feature is selected under ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings"),"; uncheck this box to disable it."),(0,a.kt)("p",null,"If you want to delete Traefik resources, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Reset Kubernetes")," on the ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings")," panel of the UI."),(0,a.kt)("h4",{id:"q-is-there-support-for-internal-container-port-forwarding"},(0,a.kt)("strong",{parentName:"h4"},"Q: Is there support for internal container port forwarding?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Yes, support has been enabled again for this feature on Linux and macOS."),(0,a.kt)("h4",{id:"q-does-file-sharing-work-similarly-to-docker-desktop-do-i-have-to-do-any-additional-configuration-to-mount-volumes-to-vms"},(0,a.kt)("strong",{parentName:"h4"},"Q: Does file sharing work similarly to Docker Desktop? Do I have to do any additional configuration to mount volumes to VMs?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Currently, the following directories are shared by default: ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/$USER")," on macOS, ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/$USER")," on Linux, and ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/rancher-desktop")," on both. For Windows, all files are automatically shared via WSL2."),(0,a.kt)("h4",{id:"q-can-containers-reach-back-to-host-services-via-hostdockerinternal"},(0,a.kt)("strong",{parentName:"h4"},"Q: Can containers reach back to host services via ",(0,a.kt)("inlineCode",{parentName:"strong"},"host.docker.internal"),"?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Yes. On Windows, you may need to create a firewall rule to allow communication between the host and the container. You can run below command in a privileged powershell to create the firewall rule."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'New-NetFirewallRule -DisplayName "WSL" -Direction Inbound -InterfaceAlias "vEthernet (WSL)" -Action Allow\n')),(0,a.kt)("h4",{id:"q-i-dont-need-the-kubernetes-cluster-deployed-by-rancher-desktop-how-do-i-disable-it-to-save-resources"},(0,a.kt)("strong",{parentName:"h4"},"Q: I don't need the Kubernetes cluster deployed by Rancher Desktop; how do I disable it to save resources?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," Kubernetes can be disabled to run just ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerd")," by itself for reduced resource consumption. By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Kubernetes")," feature is selected under ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings"),"; uncheck this box to disable it."),(0,a.kt)("h4",{id:"q-whats-happening-to-the-kubernetes-image-manager-kim"},(0,a.kt)("strong",{parentName:"h4"},"Q: What's happening to the Kubernetes Image Manager (kim)?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," As of version 1.0 Kim is no longer shipped and has been replaced by nerdctl and the Docker CLI."),(0,a.kt)("h4",{id:"q-running-brew-install-rancher-is-failing-with-a-it-seems-there-is-already-a-binary-at-usrlocalbinbinary-error-why"},(0,a.kt)("strong",{parentName:"h4"},"Q: Running ",(0,a.kt)("inlineCode",{parentName:"strong"},"brew install rancher")," is failing with a ",(0,a.kt)("inlineCode",{parentName:"strong"},"It seems there is already a Binary at '/usr/local/bin/<BINARY>'")," error, why?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," If any of the Rancher Desktop supporting utilities (Helm, kubectl, nerdctl, docker) are already managed by Homebrew, then the installation fails due to how the Homebrew cask formula is defined. Installing using the Mac app will avoid this issue."),(0,a.kt)("h4",{id:"q-i-installed-nerdctl-through-the-arch-user-repository-but-it-doesnt-work-with-rancher-desktop-why"},"Q: I installed ",(0,a.kt)("inlineCode",{parentName:"h4"},"nerdctl")," through the Arch User Repository, but it doesn't work with Rancher Desktop, why?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," For Rancher Desktop, ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," must run inside the VM and not on the host. The host version is just a shell wrapper to execute the command inside the VM."),(0,a.kt)("h4",{id:"q-the-tools-on-the-support-utilities-page-are-not-installed-and-i-see-a-insufficient-permission-to-manipulate-usrlocalbin-error-how-do-i-fix-it"},(0,a.kt)("strong",{parentName:"h4"},"Q: The tools on the Support Utilities page are not installed and I see a ",(0,a.kt)("inlineCode",{parentName:"strong"},"Insufficient permission to manipulate /usr/local/bin")," error, how do I fix it?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," This occurs when you do not have ownership of ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),". A long-term solution to improve the handling of permissions is in the works. In the meantime, a temporary workaround is to change ownership of ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo chown $USER /usr/local/bin"),". When you are able to write to the directory, Rancher Desktop is able to create the symlinks."),(0,a.kt)("p",null,"From versions 1.3.0 and above, we no longer create symlinks in /usr/local/bin but in ~/.rd/bin and put that directory on the PATH instead, to avoid having to deal with write permissions to /usr/local/bin and file conflicts. We strongly recommend you to upgrade to the latest version of Rancher Desktop."),(0,a.kt)("h4",{id:"q-is-cygwin-compatible-with-rancher-desktop"},(0,a.kt)("strong",{parentName:"h4"},"Q: Is Cygwin compatible with Rancher Desktop?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," No, but there are plans to add compatibility."),(0,a.kt)("h4",{id:"q-how-can-i-add-rancher-desktop-to-the-startup-programs-list-on-windows"},(0,a.kt)("strong",{parentName:"h4"},"Q: How can I add Rancher Desktop to the startup programs list on Windows?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")," On Windows, you can add a program to startup programs list in different ways. For example, you can use below steps."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'- Press Windows+R to open the Run dialog box.\n- Type `shell:startup` and then hit Enter to open the Startup folder.\n- Copy "Rancher Desktop" shortcut from Desktop and paste in Startup folder.\n- Restart your machine.\n')),(0,a.kt)("h4",{id:"q-where-does-rancher-desktop-actually-put-the-data-volumes"},(0,a.kt)("strong",{parentName:"h4"},"Q: Where does Rancher Desktop actually put the data volumes?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows:"),"\nOpen Run menu (Press Windows + R) and open the path provided below, depending on the active container runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dockerd(moby): \\\\wsl$\\rancher-desktop-data\\var\\lib\\docker\\volumes\ncontainerd: \\\\wsl$\\rancher-desktop-data\\var\\lib\\nerdctl\\dbb19c5e\\volumes\\<namespace>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"macOS & Linux:"),"\nNavigate to the path provided below in the (lima) VM, depending on the active container runtime. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl shell")," to access these paths in the VM."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dockerd(moby): /var/lib/docker/volumes\ncontainerd: /var/lib/nerdctl/dbb19c5e/volumes/<namespace>\n")))}c.isMDXComponent=!0}}]);