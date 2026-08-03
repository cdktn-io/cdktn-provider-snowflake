# `apiIntegrationExternalMcpDynamicClient` Submodule <a name="`apiIntegrationExternalMcpDynamicClient` Submodule" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationExternalMcpDynamicClient <a name="ApiIntegrationExternalMcpDynamicClient" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client snowflake_api_integration_external_mcp_dynamic_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient(
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
  oauth_resource_url: str,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  timeouts: ApiIntegrationExternalMcpDynamicClientTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.oauthResourceUrl">oauth_resource_url</a></code> | <code>str</code> | The URL of the OAuth2 protected resource server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_allowed_prefixes ApiIntegrationExternalMcpDynamicClient#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#enabled ApiIntegrationExternalMcpDynamicClient#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#name ApiIntegrationExternalMcpDynamicClient#name}

---

##### `oauth_resource_url`<sup>Required</sup> <a name="oauth_resource_url" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.oauthResourceUrl"></a>

- *Type:* str

The URL of the OAuth2 protected resource server.

This URL is used by Snowflake to discover OAuth2 provider endpoints via RFC 8414 server metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#oauth_resource_url ApiIntegrationExternalMcpDynamicClient#oauth_resource_url}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_blocked_prefixes ApiIntegrationExternalMcpDynamicClient#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#comment ApiIntegrationExternalMcpDynamicClient#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#timeouts ApiIntegrationExternalMcpDynamicClient#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetApiBlockedPrefixes">reset_api_blocked_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}.

---

##### `reset_api_blocked_prefixes` <a name="reset_api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetApiBlockedPrefixes"></a>

```python
def reset_api_blocked_prefixes() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiIntegrationExternalMcpDynamicClient resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiIntegrationExternalMcpDynamicClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiIntegrationExternalMcpDynamicClient to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiIntegrationExternalMcpDynamicClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationExternalMcpDynamicClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList">ApiIntegrationExternalMcpDynamicClientDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList">ApiIntegrationExternalMcpDynamicClientShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference">ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixesInput">api_allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixesInput">api_blocked_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrlInput">oauth_resource_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrl">oauth_resource_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.describeOutput"></a>

```python
describe_output: ApiIntegrationExternalMcpDynamicClientDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList">ApiIntegrationExternalMcpDynamicClientDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.showOutput"></a>

```python
show_output: ApiIntegrationExternalMcpDynamicClientShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList">ApiIntegrationExternalMcpDynamicClientShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeouts"></a>

```python
timeouts: ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference">ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference</a>

---

##### `api_allowed_prefixes_input`<sup>Optional</sup> <a name="api_allowed_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixesInput"></a>

```python
api_allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes_input`<sup>Optional</sup> <a name="api_blocked_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixesInput"></a>

```python
api_blocked_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_resource_url_input`<sup>Optional</sup> <a name="oauth_resource_url_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrlInput"></a>

```python
oauth_resource_url_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiIntegrationExternalMcpDynamicClientTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes`<sup>Required</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_resource_url`<sup>Required</sup> <a name="oauth_resource_url" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrl"></a>

```python
oauth_resource_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationExternalMcpDynamicClientConfig <a name="ApiIntegrationExternalMcpDynamicClientConfig" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig(
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
  oauth_resource_url: str,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  timeouts: ApiIntegrationExternalMcpDynamicClientTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.oauthResourceUrl">oauth_resource_url</a></code> | <code>str</code> | The URL of the OAuth2 protected resource server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_allowed_prefixes ApiIntegrationExternalMcpDynamicClient#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#enabled ApiIntegrationExternalMcpDynamicClient#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#name ApiIntegrationExternalMcpDynamicClient#name}

---

##### `oauth_resource_url`<sup>Required</sup> <a name="oauth_resource_url" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.oauthResourceUrl"></a>

```python
oauth_resource_url: str
```

- *Type:* str

The URL of the OAuth2 protected resource server.

This URL is used by Snowflake to discover OAuth2 provider endpoints via RFC 8414 server metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#oauth_resource_url ApiIntegrationExternalMcpDynamicClient#oauth_resource_url}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_blocked_prefixes ApiIntegrationExternalMcpDynamicClient#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#comment ApiIntegrationExternalMcpDynamicClient#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.timeouts"></a>

```python
timeouts: ApiIntegrationExternalMcpDynamicClientTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#timeouts ApiIntegrationExternalMcpDynamicClient#timeouts}

---

### ApiIntegrationExternalMcpDynamicClientDescribeOutput <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput()
```


### ApiIntegrationExternalMcpDynamicClientShowOutput <a name="ApiIntegrationExternalMcpDynamicClientShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput()
```


### ApiIntegrationExternalMcpDynamicClientTimeouts <a name="ApiIntegrationExternalMcpDynamicClientTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationExternalMcpDynamicClientDescribeOutputList <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.apiProvider">api_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.blockedPrefixes">blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.oauthResourceUrl">oauth_resource_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.userAuthType">user_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput">ApiIntegrationExternalMcpDynamicClientDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

---

##### `blocked_prefixes`<sup>Required</sup> <a name="blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.blockedPrefixes"></a>

```python
blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `oauth_resource_url`<sup>Required</sup> <a name="oauth_resource_url" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.oauthResourceUrl"></a>

```python
oauth_resource_url: str
```

- *Type:* str

---

##### `user_auth_type`<sup>Required</sup> <a name="user_auth_type" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.userAuthType"></a>

```python
user_auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationExternalMcpDynamicClientDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput">ApiIntegrationExternalMcpDynamicClientDescribeOutput</a>

---


### ApiIntegrationExternalMcpDynamicClientShowOutputList <a name="ApiIntegrationExternalMcpDynamicClientShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference <a name="ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput">ApiIntegrationExternalMcpDynamicClientShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationExternalMcpDynamicClientShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput">ApiIntegrationExternalMcpDynamicClientShowOutput</a>

---


### ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference <a name="ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_external_mcp_dynamic_client

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiIntegrationExternalMcpDynamicClientTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---



