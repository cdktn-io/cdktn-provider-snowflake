# `apiIntegrationExternalMcpOauth2` Submodule <a name="`apiIntegrationExternalMcpOauth2` Submodule" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationExternalMcpOauth2 <a name="ApiIntegrationExternalMcpOauth2" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2 snowflake_api_integration_external_mcp_oauth2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_allowed_prefixes: typing.List[str],
  enabled: bool | IResolvable,
  name: str,
  oauth_authorization_endpoint: str,
  oauth_client_id: str,
  oauth_client_secret: str,
  oauth_token_endpoint: str,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  oauth_client_auth_method: str = None,
  oauth_refresh_token_validity: typing.Union[int, float] = None,
  timeouts: ApiIntegrationExternalMcpOauth2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthAuthorizationEndpoint">oauth_authorization_endpoint</a></code> | <code>str</code> | Specifies the OAuth 2.0 authorization endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Specifies the OAuth 2.0 client ID for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthTokenEndpoint">oauth_token_endpoint</a></code> | <code>str</code> | Specifies the OAuth 2.0 token endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientAuthMethod">oauth_client_auth_method</a></code> | <code>str</code> | Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` \| `CLIENT_SECRET_POST`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | Specifies the validity period (in seconds) for refresh tokens issued by the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_allowed_prefixes ApiIntegrationExternalMcpOauth2#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#enabled ApiIntegrationExternalMcpOauth2#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#name ApiIntegrationExternalMcpOauth2#name}

---

##### `oauth_authorization_endpoint`<sup>Required</sup> <a name="oauth_authorization_endpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthAuthorizationEndpoint"></a>

- *Type:* str

Specifies the OAuth 2.0 authorization endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_authorization_endpoint ApiIntegrationExternalMcpOauth2#oauth_authorization_endpoint}

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientId"></a>

- *Type:* str

Specifies the OAuth 2.0 client ID for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_id ApiIntegrationExternalMcpOauth2#oauth_client_id}

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientSecret"></a>

- *Type:* str

Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_secret ApiIntegrationExternalMcpOauth2#oauth_client_secret}

---

##### `oauth_token_endpoint`<sup>Required</sup> <a name="oauth_token_endpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthTokenEndpoint"></a>

- *Type:* str

Specifies the OAuth 2.0 token endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_token_endpoint ApiIntegrationExternalMcpOauth2#oauth_token_endpoint}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_blocked_prefixes ApiIntegrationExternalMcpOauth2#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#comment ApiIntegrationExternalMcpOauth2#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_client_auth_method`<sup>Optional</sup> <a name="oauth_client_auth_method" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientAuthMethod"></a>

- *Type:* str

Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` | `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_auth_method ApiIntegrationExternalMcpOauth2#oauth_client_auth_method}

---

##### `oauth_refresh_token_validity`<sup>Optional</sup> <a name="oauth_refresh_token_validity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthRefreshTokenValidity"></a>

- *Type:* typing.Union[int, float]

Specifies the validity period (in seconds) for refresh tokens issued by the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_refresh_token_validity ApiIntegrationExternalMcpOauth2#oauth_refresh_token_validity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#timeouts ApiIntegrationExternalMcpOauth2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetApiBlockedPrefixes">reset_api_blocked_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthClientAuthMethod">reset_oauth_client_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthRefreshTokenValidity">reset_oauth_refresh_token_validity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}.

---

##### `reset_api_blocked_prefixes` <a name="reset_api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetApiBlockedPrefixes"></a>

```python
def reset_api_blocked_prefixes() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oauth_client_auth_method` <a name="reset_oauth_client_auth_method" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthClientAuthMethod"></a>

```python
def reset_oauth_client_auth_method() -> None
```

##### `reset_oauth_refresh_token_validity` <a name="reset_oauth_refresh_token_validity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthRefreshTokenValidity"></a>

```python
def reset_oauth_refresh_token_validity() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiIntegrationExternalMcpOauth2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiIntegrationExternalMcpOauth2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationExternalMcpOauth2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList">ApiIntegrationExternalMcpOauth2DescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList">ApiIntegrationExternalMcpOauth2ShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference">ApiIntegrationExternalMcpOauth2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixesInput">api_allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixesInput">api_blocked_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpointInput">oauth_authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethodInput">oauth_client_auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientIdInput">oauth_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecretInput">oauth_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidityInput">oauth_refresh_token_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpointInput">oauth_token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpoint">oauth_authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethod">oauth_client_auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpoint">oauth_token_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.describeOutput"></a>

```python
describe_output: ApiIntegrationExternalMcpOauth2DescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList">ApiIntegrationExternalMcpOauth2DescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.showOutput"></a>

```python
show_output: ApiIntegrationExternalMcpOauth2ShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList">ApiIntegrationExternalMcpOauth2ShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeouts"></a>

```python
timeouts: ApiIntegrationExternalMcpOauth2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference">ApiIntegrationExternalMcpOauth2TimeoutsOutputReference</a>

---

##### `api_allowed_prefixes_input`<sup>Optional</sup> <a name="api_allowed_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixesInput"></a>

```python
api_allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes_input`<sup>Optional</sup> <a name="api_blocked_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixesInput"></a>

```python
api_blocked_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_authorization_endpoint_input`<sup>Optional</sup> <a name="oauth_authorization_endpoint_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpointInput"></a>

```python
oauth_authorization_endpoint_input: str
```

- *Type:* str

---

##### `oauth_client_auth_method_input`<sup>Optional</sup> <a name="oauth_client_auth_method_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethodInput"></a>

```python
oauth_client_auth_method_input: str
```

- *Type:* str

---

##### `oauth_client_id_input`<sup>Optional</sup> <a name="oauth_client_id_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientIdInput"></a>

```python
oauth_client_id_input: str
```

- *Type:* str

---

##### `oauth_client_secret_input`<sup>Optional</sup> <a name="oauth_client_secret_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecretInput"></a>

```python
oauth_client_secret_input: str
```

- *Type:* str

---

##### `oauth_refresh_token_validity_input`<sup>Optional</sup> <a name="oauth_refresh_token_validity_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidityInput"></a>

```python
oauth_refresh_token_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_token_endpoint_input`<sup>Optional</sup> <a name="oauth_token_endpoint_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpointInput"></a>

```python
oauth_token_endpoint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiIntegrationExternalMcpOauth2Timeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes`<sup>Required</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_authorization_endpoint`<sup>Required</sup> <a name="oauth_authorization_endpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpoint"></a>

```python
oauth_authorization_endpoint: str
```

- *Type:* str

---

##### `oauth_client_auth_method`<sup>Required</sup> <a name="oauth_client_auth_method" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethod"></a>

```python
oauth_client_auth_method: str
```

- *Type:* str

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

---

##### `oauth_refresh_token_validity`<sup>Required</sup> <a name="oauth_refresh_token_validity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidity"></a>

```python
oauth_refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_token_endpoint`<sup>Required</sup> <a name="oauth_token_endpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpoint"></a>

```python
oauth_token_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationExternalMcpOauth2Config <a name="ApiIntegrationExternalMcpOauth2Config" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_allowed_prefixes: typing.List[str],
  enabled: bool | IResolvable,
  name: str,
  oauth_authorization_endpoint: str,
  oauth_client_id: str,
  oauth_client_secret: str,
  oauth_token_endpoint: str,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  oauth_client_auth_method: str = None,
  oauth_refresh_token_validity: typing.Union[int, float] = None,
  timeouts: ApiIntegrationExternalMcpOauth2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthAuthorizationEndpoint">oauth_authorization_endpoint</a></code> | <code>str</code> | Specifies the OAuth 2.0 authorization endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Specifies the OAuth 2.0 client ID for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthTokenEndpoint">oauth_token_endpoint</a></code> | <code>str</code> | Specifies the OAuth 2.0 token endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientAuthMethod">oauth_client_auth_method</a></code> | <code>str</code> | Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` \| `CLIENT_SECRET_POST`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | Specifies the validity period (in seconds) for refresh tokens issued by the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_allowed_prefixes ApiIntegrationExternalMcpOauth2#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#enabled ApiIntegrationExternalMcpOauth2#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#name ApiIntegrationExternalMcpOauth2#name}

---

##### `oauth_authorization_endpoint`<sup>Required</sup> <a name="oauth_authorization_endpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthAuthorizationEndpoint"></a>

```python
oauth_authorization_endpoint: str
```

- *Type:* str

Specifies the OAuth 2.0 authorization endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_authorization_endpoint ApiIntegrationExternalMcpOauth2#oauth_authorization_endpoint}

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

Specifies the OAuth 2.0 client ID for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_id ApiIntegrationExternalMcpOauth2#oauth_client_id}

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_secret ApiIntegrationExternalMcpOauth2#oauth_client_secret}

---

##### `oauth_token_endpoint`<sup>Required</sup> <a name="oauth_token_endpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthTokenEndpoint"></a>

```python
oauth_token_endpoint: str
```

- *Type:* str

Specifies the OAuth 2.0 token endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_token_endpoint ApiIntegrationExternalMcpOauth2#oauth_token_endpoint}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_blocked_prefixes ApiIntegrationExternalMcpOauth2#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#comment ApiIntegrationExternalMcpOauth2#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_client_auth_method`<sup>Optional</sup> <a name="oauth_client_auth_method" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientAuthMethod"></a>

```python
oauth_client_auth_method: str
```

- *Type:* str

Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` | `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_auth_method ApiIntegrationExternalMcpOauth2#oauth_client_auth_method}

---

##### `oauth_refresh_token_validity`<sup>Optional</sup> <a name="oauth_refresh_token_validity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthRefreshTokenValidity"></a>

```python
oauth_refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the validity period (in seconds) for refresh tokens issued by the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_refresh_token_validity ApiIntegrationExternalMcpOauth2#oauth_refresh_token_validity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.timeouts"></a>

```python
timeouts: ApiIntegrationExternalMcpOauth2Timeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#timeouts ApiIntegrationExternalMcpOauth2#timeouts}

---

### ApiIntegrationExternalMcpOauth2DescribeOutput <a name="ApiIntegrationExternalMcpOauth2DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput()
```


### ApiIntegrationExternalMcpOauth2ShowOutput <a name="ApiIntegrationExternalMcpOauth2ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput()
```


### ApiIntegrationExternalMcpOauth2Timeouts <a name="ApiIntegrationExternalMcpOauth2Timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationExternalMcpOauth2DescribeOutputList <a name="ApiIntegrationExternalMcpOauth2DescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference <a name="ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.apiProvider">api_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.blockedPrefixes">blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity">oauth_access_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAssertionIssuer">oauth_assertion_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauth_authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientAuthMethod">oauth_client_auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthGrant">oauth_grant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint">oauth_token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthUsername">oauth_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.userAuthType">user_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput">ApiIntegrationExternalMcpOauth2DescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

---

##### `blocked_prefixes`<sup>Required</sup> <a name="blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.blockedPrefixes"></a>

```python
blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `oauth_access_token_validity`<sup>Required</sup> <a name="oauth_access_token_validity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```python
oauth_access_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_assertion_issuer`<sup>Required</sup> <a name="oauth_assertion_issuer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAssertionIssuer"></a>

```python
oauth_assertion_issuer: str
```

- *Type:* str

---

##### `oauth_authorization_endpoint`<sup>Required</sup> <a name="oauth_authorization_endpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```python
oauth_authorization_endpoint: str
```

- *Type:* str

---

##### `oauth_client_auth_method`<sup>Required</sup> <a name="oauth_client_auth_method" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```python
oauth_client_auth_method: str
```

- *Type:* str

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_grant`<sup>Required</sup> <a name="oauth_grant" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthGrant"></a>

```python
oauth_grant: str
```

- *Type:* str

---

##### `oauth_refresh_token_validity`<sup>Required</sup> <a name="oauth_refresh_token_validity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```python
oauth_refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_token_endpoint`<sup>Required</sup> <a name="oauth_token_endpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```python
oauth_token_endpoint: str
```

- *Type:* str

---

##### `oauth_username`<sup>Required</sup> <a name="oauth_username" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthUsername"></a>

```python
oauth_username: str
```

- *Type:* str

---

##### `user_auth_type`<sup>Required</sup> <a name="user_auth_type" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.userAuthType"></a>

```python
user_auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationExternalMcpOauth2DescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput">ApiIntegrationExternalMcpOauth2DescribeOutput</a>

---


### ApiIntegrationExternalMcpOauth2ShowOutputList <a name="ApiIntegrationExternalMcpOauth2ShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationExternalMcpOauth2ShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationExternalMcpOauth2ShowOutputOutputReference <a name="ApiIntegrationExternalMcpOauth2ShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput">ApiIntegrationExternalMcpOauth2ShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationExternalMcpOauth2ShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput">ApiIntegrationExternalMcpOauth2ShowOutput</a>

---


### ApiIntegrationExternalMcpOauth2TimeoutsOutputReference <a name="ApiIntegrationExternalMcpOauth2TimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_oauth2

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiIntegrationExternalMcpOauth2Timeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---



