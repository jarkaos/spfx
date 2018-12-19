declare interface ILinksWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;

  groupDataLabel: string;
  groupPanelHeader: string;
  manageGroupBtn: string;

  linkDataLabel: string;
  linkPanelHeader: string;
  iconInformation: string;
  manageLinksBtn: string;
  titleField: string;

  urlField: string;
  iconField: string;
  groupField: string;
  targetField: string;
  targetCurrent: string;
  targetNew: string;

  noLinksIconText: string;
  noLinksConfigured: string;
  noLinksBtn: string;

}

declare module 'LinksWebPartStrings' {
  const strings: ILinksWebPartStrings;
  export = strings;
}
