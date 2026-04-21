import { Component, Host, Prop, State, h } from '@stencil/core';

declare global {
  interface Window { navigation: any; }
}

@Component({
  tag: 'mg-ambulance-wl-app',
  styleUrl: 'mg-ambulance-wl-app.css',
  shadow: true,
})
export class MgAmbulanceWlApp {
  @State() private relativePath = "";
  @Prop() basePath: string="";
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;
  private baseUri: string = "";

  componentWillLoad() {
    this.baseUri = new URL(this.basePath, document.baseURI || "/").pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(this.baseUri)) {
        this.relativePath = path.slice(this.baseUri.length)
      } else {
        this.relativePath = ""
      }
    }

    window.navigation?.addEventListener("navigate", (ev: Event) => {
      if ((ev as any).canIntercept) { (ev as any).intercept(); }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname)
  }
  render() {
  let element = "list"
  let entryId = "@new"

  if ( this.relativePath.startsWith("entry/"))
  {
    element = "editor";
    entryId = this.relativePath.split("/")[1]
  }

  const navigate = (path:string) => {
    const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
    if (window.navigation) {
      window.navigation.navigate(absolute);
    } else {
      history.pushState({}, "", absolute);
      if (absolute.startsWith(this.baseUri)) {
        this.relativePath = absolute.slice(this.baseUri.length);
      } else {
        this.relativePath = "";
      }
    }
  }

  return (
    <Host>
      { element === "editor"
      ? <mg-ambulance-wl-editor entry-id={entryId}
          ambulance-id={this.ambulanceId} api-base={this.apiBase}
          oneditor-closed={ () => navigate("./list")} >
        </mg-ambulance-wl-editor>
      : <mg-ambulance-wl-list ambulance-id={this.ambulanceId} api-base={this.apiBase}
        onentry-clicked={ (ev: CustomEvent<string>)=> navigate("./entry/" + ev.detail) } >
      </mg-ambulance-wl-list>
      }

    </Host>
  );
}
}
