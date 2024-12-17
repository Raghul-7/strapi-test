import type { Schema, Struct } from '@strapi/strapi';

export interface LinkNavbarLinks extends Struct.ComponentSchema {
  collectionName: 'components_link_navbar_links';
  info: {
    displayName: 'navbar_links';
  };
  attributes: {
    Link_Name: Schema.Attribute.String;
    Link_url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.navbar-links': LinkNavbarLinks;
    }
  }
}
