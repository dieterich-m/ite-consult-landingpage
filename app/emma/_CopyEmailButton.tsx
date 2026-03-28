'use client'
import { useState } from 'react'

export default function CopyEmailButton() {
  const [state, setState] = useState('')

  async function copy() {
    const email = 'michael.dieterich@ite-consult.de'
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email)
      } else {
        const ta = document.createElement('textarea')
        ta.value = email
        ta.style.position = 'fixed'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.focus()
        ta.select()
        document.execCommand('copy')
        ta.remove()
      }
      setState('Kopiert ✓')
      setTimeout(() => setState(''), 1500)
    } catch {
      setState('Bitte manuell markieren und kopieren.')
      setTimeout(() => setState(''), 2500)
    }
  }

  return (
    <div className="text-center text-xs text-slate-em">
      Falls Ihr Mailprogramm nicht öffnet:{' '}
      <span
        className="font-mono select-all cursor-pointer"
        onClick={copy}
      >
        michael.dieterich@ite-consult.de
      </span>
      <button
        type="button"
        onClick={copy}
        className="ml-2 inline-flex items-center rounded-lg border border-line bg-white px-2 py-1 font-semibold hover:bg-mist"
      >
        E-Mail kopieren
      </button>
      {state && <span className="ml-2">{state}</span>}
    </div>
  )
}
