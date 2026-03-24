import * as React from 'react'
import './Stepper.css'

export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  currentStep: number
  totalSteps: number
  labels?: string[]
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  ({ currentStep, totalSteps, labels, className, ...rest }, ref) => {
    const steps = Array.from({ length: totalSteps }, (_, index) => {
      const stepNumber = index + 1
      const status = stepNumber < currentStep ? 'complete' : stepNumber === currentStep ? 'current' : 'upcoming'

      return {
        label: labels?.[index],
        stepNumber,
        status,
      }
    })

    return (
      <ol ref={ref} className={cx('ds-stepper', className)} {...rest}>
        {steps.map(({ label, stepNumber, status }) => (
          <li key={stepNumber} className="ds-stepper__item" data-status={status}>
            <span className="ds-stepper__rail" aria-hidden />
            <span className="ds-stepper__dot" aria-hidden />
            {label ? <span className="ds-stepper__label">{label}</span> : null}
          </li>
        ))}
      </ol>
    )
  },
)

Stepper.displayName = 'Stepper'
