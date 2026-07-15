import { localeRedirectScript } from '@/i18n/locale-redirect'

export default function RootPage() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: localeRedirectScript }}
    />
  )
}
