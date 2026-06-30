import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MetadataFieldWrapperComponent } from '../../../../../../../../app/shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { MetadataDirective } from '../../../../../../../../app/shared/metadata.directive';
import { ItemDetailPreviewFieldComponent as BaseComponent } from '../../../../../../../../app/shared/object-detail/my-dspace-result-detail-element/item-detail-preview/item-detail-preview-field/item-detail-preview-field.component';

@Component({
  selector: 'ds-themed-item-detail-preview-field',
  templateUrl: '../../../../../../../../app/shared/object-detail/my-dspace-result-detail-element/item-detail-preview/item-detail-preview-field/item-detail-preview-field.component.html',
  imports: [
    MetadataDirective,
    MetadataFieldWrapperComponent,
    TranslateModule,
  ],
})
export class ItemDetailPreviewFieldComponent extends BaseComponent {
}
