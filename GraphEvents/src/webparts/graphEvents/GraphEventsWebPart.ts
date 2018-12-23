import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'GraphEventsWebPartStrings';
import GraphEvents from './components/GraphEvents';
import { IGraphEventsProps } from './components/IGraphEventsProps';

import { MSGraphClient } from '@microsoft/sp-http';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';

export interface IGraphEventsWebPartProps {
  description: string;
}

export default class GraphEventsWebPart extends BaseClientSideWebPart<IGraphEventsWebPartProps> {

  public render(): void {
    this.context.msGraphClientFactory.getClient()
      .then((client: MSGraphClient): void => {
        const element: React.ReactElement<IGraphEventsProps > = React.createElement(
          GraphEvents,
          {
            graphClient: client
          }
        );
        ReactDom.render(element, this.domElement);
      });
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
