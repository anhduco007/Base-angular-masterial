import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        HttpClientModule,
        FormsModule
    ],
    declarations: [],
    exports: [
        HttpClientModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ]
})

export class CoreModule {
}
