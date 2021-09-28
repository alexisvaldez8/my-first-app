import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionsPageComponent } from './definitions-page.component';

describe('HomePageComponent', () => {
  let component: DefinitionsPageComponent;
  let fixture: ComponentFixture<DefinitionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
