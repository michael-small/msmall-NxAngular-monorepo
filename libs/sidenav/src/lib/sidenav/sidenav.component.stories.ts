import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SidenavComponent } from './sidenav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@msmall-angular-monorepo/material';

export default {
  title: 'SidenavComponent',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule, BrowserModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<SidenavComponent>;

const Template: Story<SidenavComponent> = (args: SidenavComponent) => ({
  component: SidenavComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
