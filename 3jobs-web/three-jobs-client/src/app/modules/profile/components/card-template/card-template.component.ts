import { Component, OnInit, Input } from '@angular/core';

@Component({ selector: 'card-template', templateUrl: './card-template.component.html', styleUrls: ['./card-template.component.scss'] })
export class CardTemplateComponent {

    /**
     * The card title.
     */
    @Input() title: string;

    /**
     * The card body that will be rendered.
     */
    @Input() cardBodyContent: any;

    /**
     * The id used in the collapse
     */
    @Input() cardBodyId: string;
}
