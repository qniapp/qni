# Triage labels

Engineering skills use five canonical triage roles. Apply the corresponding GitHub label in
`qniapp/qni` when a skill names a role.

| Canonical role    | GitHub label      | Meaning                                  |
| ----------------- | ----------------- | ---------------------------------------- |
| `needs-triage`    | `needs-triage`    | Maintainer needs to evaluate this issue  |
| `needs-info`      | `needs-info`      | Waiting on reporter for more information |
| `ready-for-agent` | `ready-for-agent` | Fully specified, ready for an AFK agent  |
| `ready-for-human` | `ready-for-human` | Requires human implementation            |
| `wontfix`         | `wontfix`         | Will not be actioned                     |

Existing `bug` and `enhancement` labels are categories, distinct from these five state roles.
They do not replace the state labels.

This mapping configures label names; it does not assert that missing GitHub labels have been
created. A missing label may be created when first applied in a separately authorized triage action.
