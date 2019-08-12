{{- define "mergeSecretData" }}
  {{- $map := .secrets.data }}
  {{- if .global.secrets }}
    {{- range $k, $v := .global.secrets.data }}
      {{- $map := set $map $k $v }}
    {{- end }}
  {{- end }}
  {{- b64enc (toJson $map) }}
{{- end }}

{{- define "mergeConfigData" }}
  {{- $map := .config.data }}
  {{- if .global.config }}
    {{- range $k, $v := .global.config.data }}
      {{- $map := set $map $k $v }}
    {{- end }}
  {{- end}}
  {{ toJson $map }}
{{- end }}
