import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoClinicoPage } from './documento-clinico.page';

describe('DocumentoClinicoPage', () => {
  let component: DocumentoClinicoPage;
  let fixture: ComponentFixture<DocumentoClinicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentoClinicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoClinicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
