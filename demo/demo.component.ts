import { Component } from '@angular/core';
require('font-awesome-webpack');
require('font-awesome/css/font-awesome.css');

@Component({
    selector: 'demo-app',
    template: require('./demo.html'),
    styles: [require('./demo.css')]
})
export class DemoComponent {
    private sections: Map<string, string> = new Map<string, string>();
    private point1: any;
    private point2: any;

    constructor() {
        this.sections.set('default', 'template');
        this.sections.set('resetonrelease', 'template');
    }

    private activate(section: string, tab: string): void {
        this.sections.set(section, tab);
    }
    private isActive(section: string, tab: string): boolean {
        return this.sections.get(section) === tab;
    }

    private showPoint1($event: any): void {
        this.point1 = $event;
    }

    private showPoint2($event: any): void {
        this.point2 = $event;
    }
}
