# `openflowDeploymentByoc` Submodule <a name="`openflowDeploymentByoc` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentByoc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentByoc <a name="OpenflowDeploymentByoc" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc snowflake_openflow_deployment_byoc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByoc(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  vpc_type: str,
  comment: str = None,
  custom_ingress_hostname: str = None,
  display_name: str = None,
  event_table: str = None,
  id: str = None,
  timeouts: OpenflowDeploymentByocTimeouts = None,
  use_private_link: str = None,
  use_user_auth_over_privatelink: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.vpcType">vpc_type</a></code> | <code>str</code> | Specifies whether the deployment's VPC is created by Snowflake or supplied by you. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | Specifies a custom hostname for ingress into the deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.eventTable">event_table</a></code> | <code>str</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.usePrivateLink">use_private_link</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.useUserAuthOverPrivatelink">use_user_auth_over_privatelink</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#name OpenflowDeploymentByoc#name}

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.vpcType"></a>

- *Type:* str

Specifies whether the deployment's VPC is created by Snowflake or supplied by you.

Valid values are (case-insensitive): `MANAGED` | `PROVIDED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#vpc_type OpenflowDeploymentByoc#vpc_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#comment OpenflowDeploymentByoc#comment}

---

##### `custom_ingress_hostname`<sup>Optional</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.customIngressHostname"></a>

- *Type:* str

Specifies a custom hostname for ingress into the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#custom_ingress_hostname OpenflowDeploymentByoc#custom_ingress_hostname}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.displayName"></a>

- *Type:* str

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#display_name OpenflowDeploymentByoc#display_name}

---

##### `event_table`<sup>Optional</sup> <a name="event_table" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.eventTable"></a>

- *Type:* str

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#event_table OpenflowDeploymentByoc#event_table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#timeouts OpenflowDeploymentByoc#timeouts}

---

##### `use_private_link`<sup>Optional</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.usePrivateLink"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_private_link OpenflowDeploymentByoc#use_private_link}

---

##### `use_user_auth_over_privatelink`<sup>Optional</sup> <a name="use_user_auth_over_privatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.useUserAuthOverPrivatelink"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_user_auth_over_privatelink OpenflowDeploymentByoc#use_user_auth_over_privatelink}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetCustomIngressHostname">reset_custom_ingress_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetEventTable">reset_event_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUsePrivateLink">reset_use_private_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUseUserAuthOverPrivatelink">reset_use_user_auth_over_privatelink</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_custom_ingress_hostname` <a name="reset_custom_ingress_hostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetCustomIngressHostname"></a>

```python
def reset_custom_ingress_hostname() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_event_table` <a name="reset_event_table" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetEventTable"></a>

```python
def reset_event_table() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_private_link` <a name="reset_use_private_link" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUsePrivateLink"></a>

```python
def reset_use_private_link() -> None
```

##### `reset_use_user_auth_over_privatelink` <a name="reset_use_user_auth_over_privatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUseUserAuthOverPrivatelink"></a>

```python
def reset_use_user_auth_over_privatelink() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByoc.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByoc.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByoc.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByoc.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpenflowDeploymentByoc to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpenflowDeploymentByoc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentByoc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList">OpenflowDeploymentByocDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList">OpenflowDeploymentByocParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList">OpenflowDeploymentByocShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference">OpenflowDeploymentByocTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostnameInput">custom_ingress_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTableInput">event_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLinkInput">use_private_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelinkInput">use_user_auth_over_privatelink_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcTypeInput">vpc_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTable">event_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLink">use_private_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelink">use_user_auth_over_privatelink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcType">vpc_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.describeOutput"></a>

```python
describe_output: OpenflowDeploymentByocDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList">OpenflowDeploymentByocDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.parameters"></a>

```python
parameters: OpenflowDeploymentByocParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList">OpenflowDeploymentByocParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.showOutput"></a>

```python
show_output: OpenflowDeploymentByocShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList">OpenflowDeploymentByocShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeouts"></a>

```python
timeouts: OpenflowDeploymentByocTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference">OpenflowDeploymentByocTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `custom_ingress_hostname_input`<sup>Optional</sup> <a name="custom_ingress_hostname_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostnameInput"></a>

```python
custom_ingress_hostname_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `event_table_input`<sup>Optional</sup> <a name="event_table_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTableInput"></a>

```python
event_table_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OpenflowDeploymentByocTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---

##### `use_private_link_input`<sup>Optional</sup> <a name="use_private_link_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLinkInput"></a>

```python
use_private_link_input: str
```

- *Type:* str

---

##### `use_user_auth_over_privatelink_input`<sup>Optional</sup> <a name="use_user_auth_over_privatelink_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelinkInput"></a>

```python
use_user_auth_over_privatelink_input: str
```

- *Type:* str

---

##### `vpc_type_input`<sup>Optional</sup> <a name="vpc_type_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcTypeInput"></a>

```python
vpc_type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `custom_ingress_hostname`<sup>Required</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostname"></a>

```python
custom_ingress_hostname: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `event_table`<sup>Required</sup> <a name="event_table" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTable"></a>

```python
event_table: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `use_private_link`<sup>Required</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLink"></a>

```python
use_private_link: str
```

- *Type:* str

---

##### `use_user_auth_over_privatelink`<sup>Required</sup> <a name="use_user_auth_over_privatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelink"></a>

```python
use_user_auth_over_privatelink: str
```

- *Type:* str

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcType"></a>

```python
vpc_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentByocConfig <a name="OpenflowDeploymentByocConfig" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  vpc_type: str,
  comment: str = None,
  custom_ingress_hostname: str = None,
  display_name: str = None,
  event_table: str = None,
  id: str = None,
  timeouts: OpenflowDeploymentByocTimeouts = None,
  use_private_link: str = None,
  use_user_auth_over_privatelink: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.vpcType">vpc_type</a></code> | <code>str</code> | Specifies whether the deployment's VPC is created by Snowflake or supplied by you. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | Specifies a custom hostname for ingress into the deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.displayName">display_name</a></code> | <code>str</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.eventTable">event_table</a></code> | <code>str</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.usePrivateLink">use_private_link</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.useUserAuthOverPrivatelink">use_user_auth_over_privatelink</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#name OpenflowDeploymentByoc#name}

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.vpcType"></a>

```python
vpc_type: str
```

- *Type:* str

Specifies whether the deployment's VPC is created by Snowflake or supplied by you.

Valid values are (case-insensitive): `MANAGED` | `PROVIDED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#vpc_type OpenflowDeploymentByoc#vpc_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#comment OpenflowDeploymentByoc#comment}

---

##### `custom_ingress_hostname`<sup>Optional</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.customIngressHostname"></a>

```python
custom_ingress_hostname: str
```

- *Type:* str

Specifies a custom hostname for ingress into the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#custom_ingress_hostname OpenflowDeploymentByoc#custom_ingress_hostname}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#display_name OpenflowDeploymentByoc#display_name}

---

##### `event_table`<sup>Optional</sup> <a name="event_table" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.eventTable"></a>

```python
event_table: str
```

- *Type:* str

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#event_table OpenflowDeploymentByoc#event_table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.timeouts"></a>

```python
timeouts: OpenflowDeploymentByocTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#timeouts OpenflowDeploymentByoc#timeouts}

---

##### `use_private_link`<sup>Optional</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.usePrivateLink"></a>

```python
use_private_link: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_private_link OpenflowDeploymentByoc#use_private_link}

---

##### `use_user_auth_over_privatelink`<sup>Optional</sup> <a name="use_user_auth_over_privatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.useUserAuthOverPrivatelink"></a>

```python
use_user_auth_over_privatelink: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_user_auth_over_privatelink OpenflowDeploymentByoc#use_user_auth_over_privatelink}

---

### OpenflowDeploymentByocDescribeOutput <a name="OpenflowDeploymentByocDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput()
```


### OpenflowDeploymentByocParameters <a name="OpenflowDeploymentByocParameters" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocParameters()
```


### OpenflowDeploymentByocParametersEventTable <a name="OpenflowDeploymentByocParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable()
```


### OpenflowDeploymentByocShowOutput <a name="OpenflowDeploymentByocShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocShowOutput()
```


### OpenflowDeploymentByocTimeouts <a name="OpenflowDeploymentByocTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentByocDescribeOutputList <a name="OpenflowDeploymentByocDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowDeploymentByocDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowDeploymentByocDescribeOutputOutputReference <a name="OpenflowDeploymentByocDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.usePrivateLink">use_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">use_user_auth_over_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.vpcType">vpc_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput">OpenflowDeploymentByocDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `custom_ingress_hostname`<sup>Required</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.customIngressHostname"></a>

```python
custom_ingress_hostname: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_private_link`<sup>Required</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.usePrivateLink"></a>

```python
use_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_user_auth_over_private_link`<sup>Required</sup> <a name="use_user_auth_over_private_link" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```python
use_user_auth_over_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.vpcType"></a>

```python
vpc_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowDeploymentByocDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput">OpenflowDeploymentByocDescribeOutput</a>

---


### OpenflowDeploymentByocParametersEventTableList <a name="OpenflowDeploymentByocParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowDeploymentByocParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowDeploymentByocParametersEventTableOutputReference <a name="OpenflowDeploymentByocParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable">OpenflowDeploymentByocParametersEventTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowDeploymentByocParametersEventTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable">OpenflowDeploymentByocParametersEventTable</a>

---


### OpenflowDeploymentByocParametersList <a name="OpenflowDeploymentByocParametersList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowDeploymentByocParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowDeploymentByocParametersOutputReference <a name="OpenflowDeploymentByocParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.eventTable">event_table</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList">OpenflowDeploymentByocParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters">OpenflowDeploymentByocParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_table`<sup>Required</sup> <a name="event_table" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.eventTable"></a>

```python
event_table: OpenflowDeploymentByocParametersEventTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList">OpenflowDeploymentByocParametersEventTableList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowDeploymentByocParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters">OpenflowDeploymentByocParameters</a>

---


### OpenflowDeploymentByocShowOutputList <a name="OpenflowDeploymentByocShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowDeploymentByocShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowDeploymentByocShowOutputOutputReference <a name="OpenflowDeploymentByocShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.usePrivateLink">use_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.useUserAuthOverPrivateLink">use_user_auth_over_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.vpcType">vpc_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput">OpenflowDeploymentByocShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `custom_ingress_hostname`<sup>Required</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.customIngressHostname"></a>

```python
custom_ingress_hostname: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `use_private_link`<sup>Required</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.usePrivateLink"></a>

```python
use_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_user_auth_over_private_link`<sup>Required</sup> <a name="use_user_auth_over_private_link" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```python
use_user_auth_over_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.vpcType"></a>

```python
vpc_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowDeploymentByocShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput">OpenflowDeploymentByocShowOutput</a>

---


### OpenflowDeploymentByocTimeoutsOutputReference <a name="OpenflowDeploymentByocTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_byoc

openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpenflowDeploymentByocTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---



