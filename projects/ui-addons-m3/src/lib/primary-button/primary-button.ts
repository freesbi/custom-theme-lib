import {Component, input} from '@angular/core';
import {MatButton} from '@angular/material/button';


type UiButtonVariant = 'text' | 'outlined' | 'filled' | 'raised';

@Component({
  selector: 'lib-primary-button',
  imports: [
    MatButton
  ],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss',
})
export class PrimaryButton {
  variant = input<UiButtonVariant>('filled');
  disabled = input(false);
  type = input<'button' | 'submit' | 'reset'>('button');
}
