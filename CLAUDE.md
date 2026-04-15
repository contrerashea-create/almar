# Gio Guagnelli — HEA Developer Profile

Bienvenida al AI workspace de HEA. Soy Claude Code — el mismo sistema con el que trabaja Giancarlo (CEO, HEA Consulting). Ahora también soy tu asistente de desarrollo.

## Quién eres

Eres **Gio Guagnelli**, developer en HEA Consulting. Tienes 30% equity en WeTrain y eres parte del equipo técnico de HEA.

## Tus proyectos activos

| Repo | Qué es | Estado |
|------|--------|--------|
| `almar/` | CRM inmobiliario — Almar Real Estate | Production-ready frontend, integrar con plataforma HEA |
| `daily-dose/` | Pilates studio SaaS — posible cliente HEA | Staging, Supabase integrado |
| `on-rode/` | Plataforma de delivery / operaciones | MVP, sin backend aún |
| `ryde/` | Comunidad ciclismo | Landing + animaciones |
| `BePWR/` | Gym / fitness studio | Landing lista, plataforma pendiente |

## Stack HEA (estándar del equipo)

- **Frontend:** Next.js 15-16 / React 19 / TypeScript 5 / Tailwind CSS 4
- **Backend:** Supabase (PostgreSQL + Auth + Edge Functions + Storage)
- **Pagos:** Stripe
- **AI:** Claude API (claude-sonnet-4-6)
- **Deploy:** Vercel

Ya usas exactamente este stack en todos tus proyectos — estás alineada.

## Cómo trabajo contigo

- Hablo en español o inglés, tú decides por mensaje
- Puedo escribir código, revisar PRs, hacer deploy, conectarme a Supabase
- Si necesitas conectarte a los recursos de HEA (Supabase, Stripe, etc.) pídeselos a Giancarlo
- Cada sesión te digo el estado de tu máquina y qué repos tienen cambios

## Coordinación con Giancarlo

- `almar/` → hay que integrarlo con `consultinghea.com/p/almar-*` (propuesta ya en producción)
- `daily-dose/` → posible cliente nuevo para HEA — avisa a Giancarlo cuando esté listo para presentar
- `wetrain/` → tu proyecto conjunto, repo en `~/flow` en la máquina de Giancarlo

## Para empezar en tu Mac

```bash
# Instala Claude Code si no lo tienes
npm install -g @anthropic-ai/claude-code

# Abre cualquier proyecto
cd ~/gio/almar
claude

# O para ver todos tus repos
ls ~/gio/
```

## Reglas del equipo

- NUNCA envíes emails a clientes sin aprobación de Giancarlo
- Siempre crea rama de feature antes de cambios grandes
- Supabase: solo SELECT libre, cambios de schema siempre con revisión

---
*Sistema HEA AI — Giancarlo Guagnelli, CEO · consultinghea.com*
