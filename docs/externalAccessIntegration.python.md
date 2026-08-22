# `externalAccessIntegration` Submodule <a name="`externalAccessIntegration` Submodule" id="@cdktn/provider-snowflake.externalAccessIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalAccessIntegration <a name="ExternalAccessIntegration" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration snowflake_external_access_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allowed_network_rules: typing.List[str],
  enabled: bool | IResolvable,
  name: str,
  allowed_api_authentication_integrations: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations = None,
  allowed_authentication_secrets: ExternalAccessIntegrationAllowedAuthenticationSecrets = None,
  comment: str = None,
  id: str = None,
  timeouts: ExternalAccessIntegrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedNetworkRules">allowed_network_rules</a></code> | <code>typing.List[str]</code> | Specifies the network rules for external locations reachable through this integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the integration is enabled. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedApiAuthenticationIntegrations">allowed_api_authentication_integrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | allowed_api_authentication_integrations block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | allowed_authentication_secrets block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_network_rules`<sup>Required</sup> <a name="allowed_network_rules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedNetworkRules"></a>

- *Type:* typing.List[str]

Specifies the network rules for external locations reachable through this integration.

At least one is required. Only egress network rules may be specified. For more information about this resource, see [docs](./network_rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_network_rules ExternalAccessIntegration#allowed_network_rules}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#enabled ExternalAccessIntegration#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the external access integration.

Changing this value recreates the integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#name ExternalAccessIntegration#name}

---

##### `allowed_api_authentication_integrations`<sup>Optional</sup> <a name="allowed_api_authentication_integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedApiAuthenticationIntegrations"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

allowed_api_authentication_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_api_authentication_integrations ExternalAccessIntegration#allowed_api_authentication_integrations}

---

##### `allowed_authentication_secrets`<sup>Optional</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedAuthenticationSecrets"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

allowed_authentication_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_authentication_secrets ExternalAccessIntegration#allowed_authentication_secrets}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the external access integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#comment ExternalAccessIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#timeouts ExternalAccessIntegration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations">put_allowed_api_authentication_integrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets">put_allowed_authentication_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations">reset_allowed_api_authentication_integrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets">reset_allowed_authentication_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_api_authentication_integrations` <a name="put_allowed_api_authentication_integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations"></a>

```python
def put_allowed_api_authentication_integrations(
  integrations: typing.List[str] = None,
  none: bool | IResolvable = None
) -> None
```

###### `integrations`<sup>Optional</sup> <a name="integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations.parameter.integrations"></a>

- *Type:* typing.List[str]

Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#integrations ExternalAccessIntegration#integrations}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations.parameter.none"></a>

- *Type:* bool | cdktn.IResolvable

When true, no API authentication integrations are allowed. Conflicts with `integrations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

##### `put_allowed_authentication_secrets` <a name="put_allowed_authentication_secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets"></a>

```python
def put_allowed_authentication_secrets(
  all: bool | IResolvable = None,
  none: bool | IResolvable = None,
  secrets: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets.parameter.all"></a>

- *Type:* bool | cdktn.IResolvable

When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#all ExternalAccessIntegration#all}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets.parameter.none"></a>

- *Type:* bool | cdktn.IResolvable

When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

###### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets.parameter.secrets"></a>

- *Type:* typing.List[str]

Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#secrets ExternalAccessIntegration#secrets}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}.

---

##### `reset_allowed_api_authentication_integrations` <a name="reset_allowed_api_authentication_integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations"></a>

```python
def reset_allowed_api_authentication_integrations() -> None
```

##### `reset_allowed_authentication_secrets` <a name="reset_allowed_authentication_secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets"></a>

```python
def reset_allowed_authentication_secrets() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExternalAccessIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExternalAccessIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ExternalAccessIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations">allowed_api_authentication_integrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput">allowed_api_authentication_integrations_input</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput">allowed_authentication_secrets_input</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput">allowed_network_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules">allowed_network_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_api_authentication_integrations`<sup>Required</sup> <a name="allowed_api_authentication_integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations"></a>

```python
allowed_api_authentication_integrations: ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a>

---

##### `allowed_authentication_secrets`<sup>Required</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput"></a>

```python
describe_output: ExternalAccessIntegrationDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput"></a>

```python
show_output: ExternalAccessIntegrationShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts"></a>

```python
timeouts: ExternalAccessIntegrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a>

---

##### `allowed_api_authentication_integrations_input`<sup>Optional</sup> <a name="allowed_api_authentication_integrations_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput"></a>

```python
allowed_api_authentication_integrations_input: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `allowed_authentication_secrets_input`<sup>Optional</sup> <a name="allowed_authentication_secrets_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput"></a>

```python
allowed_authentication_secrets_input: ExternalAccessIntegrationAllowedAuthenticationSecrets
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `allowed_network_rules_input`<sup>Optional</sup> <a name="allowed_network_rules_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput"></a>

```python
allowed_network_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ExternalAccessIntegrationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---

##### `allowed_network_rules`<sup>Required</sup> <a name="allowed_network_rules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules"></a>

```python
allowed_network_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrations <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations(
  integrations: typing.List[str] = None,
  none: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations">integrations</a></code> | <code>typing.List[str]</code> | Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none">none</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, no API authentication integrations are allowed. Conflicts with `integrations`. |

---

##### `integrations`<sup>Optional</sup> <a name="integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations"></a>

```python
integrations: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#integrations ExternalAccessIntegration#integrations}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none"></a>

```python
none: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, no API authentication integrations are allowed. Conflicts with `integrations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

### ExternalAccessIntegrationAllowedAuthenticationSecrets <a name="ExternalAccessIntegrationAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets(
  all: bool | IResolvable = None,
  none: bool | IResolvable = None,
  secrets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all">all</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none">none</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets">secrets</a></code> | <code>typing.List[str]</code> | Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#all ExternalAccessIntegration#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none"></a>

```python
none: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets"></a>

```python
secrets: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#secrets ExternalAccessIntegration#secrets}

---

### ExternalAccessIntegrationConfig <a name="ExternalAccessIntegrationConfig" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allowed_network_rules: typing.List[str],
  enabled: bool | IResolvable,
  name: str,
  allowed_api_authentication_integrations: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations = None,
  allowed_authentication_secrets: ExternalAccessIntegrationAllowedAuthenticationSecrets = None,
  comment: str = None,
  id: str = None,
  timeouts: ExternalAccessIntegrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules">allowed_network_rules</a></code> | <code>typing.List[str]</code> | Specifies the network rules for external locations reachable through this integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the integration is enabled. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations">allowed_api_authentication_integrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | allowed_api_authentication_integrations block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | allowed_authentication_secrets block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_network_rules`<sup>Required</sup> <a name="allowed_network_rules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules"></a>

```python
allowed_network_rules: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the network rules for external locations reachable through this integration.

At least one is required. Only egress network rules may be specified. For more information about this resource, see [docs](./network_rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_network_rules ExternalAccessIntegration#allowed_network_rules}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#enabled ExternalAccessIntegration#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the external access integration.

Changing this value recreates the integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#name ExternalAccessIntegration#name}

---

##### `allowed_api_authentication_integrations`<sup>Optional</sup> <a name="allowed_api_authentication_integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations"></a>

```python
allowed_api_authentication_integrations: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

allowed_api_authentication_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_api_authentication_integrations ExternalAccessIntegration#allowed_api_authentication_integrations}

---

##### `allowed_authentication_secrets`<sup>Optional</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: ExternalAccessIntegrationAllowedAuthenticationSecrets
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

allowed_authentication_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_authentication_secrets ExternalAccessIntegration#allowed_authentication_secrets}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the external access integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#comment ExternalAccessIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts"></a>

```python
timeouts: ExternalAccessIntegrationTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#timeouts ExternalAccessIntegration#timeouts}

---

### ExternalAccessIntegrationDescribeOutput <a name="ExternalAccessIntegrationDescribeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationDescribeOutput()
```


### ExternalAccessIntegrationShowOutput <a name="ExternalAccessIntegrationShowOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationShowOutput()
```


### ExternalAccessIntegrationTimeouts <a name="ExternalAccessIntegrationTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations">reset_integrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone">reset_none</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_integrations` <a name="reset_integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations"></a>

```python
def reset_integrations() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone"></a>

```python
def reset_none() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput">integrations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput">none_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations">integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none">none</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integrations_input`<sup>Optional</sup> <a name="integrations_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput"></a>

```python
integrations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput"></a>

```python
none_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `integrations`<sup>Required</sup> <a name="integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations"></a>

```python
integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none"></a>

```python
none: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---


### ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference <a name="ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone">reset_none</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets">reset_secrets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone"></a>

```python
def reset_none() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets"></a>

```python
def reset_secrets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput">all_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput">none_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput">secrets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all">all</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none">none</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets">secrets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput"></a>

```python
all_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput"></a>

```python
none_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput"></a>

```python
secrets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none"></a>

```python
none: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets"></a>

```python
secrets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalAccessIntegrationAllowedAuthenticationSecrets
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---


### ExternalAccessIntegrationDescribeOutputList <a name="ExternalAccessIntegrationDescribeOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalAccessIntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ExternalAccessIntegrationDescribeOutputOutputReference <a name="ExternalAccessIntegrationDescribeOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">allowed_api_authentication_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules">allowed_network_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_api_authentication_integrations`<sup>Required</sup> <a name="allowed_api_authentication_integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```python
allowed_api_authentication_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_authentication_secrets`<sup>Required</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_network_rules`<sup>Required</sup> <a name="allowed_network_rules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```python
allowed_network_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ExternalAccessIntegrationDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a>

---


### ExternalAccessIntegrationShowOutputList <a name="ExternalAccessIntegrationShowOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalAccessIntegrationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ExternalAccessIntegrationShowOutputOutputReference <a name="ExternalAccessIntegrationShowOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ExternalAccessIntegrationShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a>

---


### ExternalAccessIntegrationTimeoutsOutputReference <a name="ExternalAccessIntegrationTimeoutsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import external_access_integration

externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ExternalAccessIntegrationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---



