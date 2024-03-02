import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-50 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-50 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-50 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-50"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-50">{label}</span>
    </label>
  )
}

function SelectInput({ label, options, ...props }) {
  return (
    <div className="relative z-0 my-4 transition-all focus-within:z-10">
      <label className="mb-2 block text-base/6 text-neutral-50">{label}</label>
      <select
        {...props}
        className="block w-full rounded-2xl border border-neutral-300 border-neutral-300 bg-transparent px-6 pb-4 pt-2 text-base/6 text-neutral-50 ring-4 ring-transparent transition focus:outline-none focus:ring-neutral-950/5"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-neutral-900"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function GetStartedForm() {
  const handleHeightUnitChange = (event) => {
    setHeightUnit(event.target.value)
  }

  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2
          className="font-display text-base font-semibold
        text-neutral-50"
        >
          Reach Out
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/20">
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset label="Goals" name="goals" autoComplete="goals">
              <legend className="text-base/6 text-neutral-50">Goals</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Lose Fat" name="goals" value="25" />
                <RadioInput label="Gain Muscle" name="goals" value="50" />
                <RadioInput
                  label="Body Recomposition"
                  name="goals"
                  value="150"
                />
                <RadioInput
                  label="Maintain Current Weight"
                  name="goals"
                  value="100"
                />
              </div>
            </fieldset>
          </div>
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <SelectInput
              label="Height"
              name="height"
              options={[
                { label: 'Meters', value: 'metric' },
                { label: 'Feet and Inches', value: 'imperial' },
              ]}
              // onChange={handleHeightUnitChange}
            />
          </div>

          <TextInput label="Age" type="age" name="age" autoComplete="age" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset label="Gender" name="gender" autoComplete="gender">
              <legend className="text-base/6 text-neutral-50">Gender</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Male" name="goals" value="25" />
                <RadioInput label="Female" name="goals" value="50" />
                <RadioInput
                  label="Prefer Not to Answer"
                  name="goals"
                  value="150"
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10 border-neutral-300">
          Submit{' '}
        </Button>
      </form>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Begin here" title="Let’s get started!">
        <p>
          Fill out the form below and sit back for your workout and nutrition
          regimine.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <GetStartedForm />
          {/* <ContactDetails /> */}
        </div>
      </Container>
    </>
  )
}
