# `failoverGroupSecondary` Submodule <a name="`failoverGroupSecondary` Submodule" id="@cdktn/provider-snowflake.failoverGroupSecondary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroupSecondary <a name="FailoverGroupSecondary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary snowflake_failover_group_secondary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondary(
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
  primary: str,
  id: str = None,
  timeouts: FailoverGroupSecondaryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the failover group secondary; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.primary">primary</a></code> | <code>str</code> | Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the failover group secondary;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#name FailoverGroupSecondary#name}

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.primary"></a>

- *Type:* str

Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#primary FailoverGroupSecondary#primary}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#timeouts FailoverGroupSecondary#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#create FailoverGroupSecondary#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#delete FailoverGroupSecondary#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#read FailoverGroupSecondary#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#update FailoverGroupSecondary#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FailoverGroupSecondary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FailoverGroupSecondary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FailoverGroupSecondary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FailoverGroupSecondary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FailoverGroupSecondary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.isPrimary">is_primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList">FailoverGroupSecondaryShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference">FailoverGroupSecondaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primaryInput">primary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primary">primary</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.isPrimary"></a>

```python
is_primary: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.showOutput"></a>

```python
show_output: FailoverGroupSecondaryShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList">FailoverGroupSecondaryShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeouts"></a>

```python
timeouts: FailoverGroupSecondaryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference">FailoverGroupSecondaryTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primaryInput"></a>

```python
primary_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FailoverGroupSecondaryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primary"></a>

```python
primary: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupSecondaryConfig <a name="FailoverGroupSecondaryConfig" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondaryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  primary: str,
  id: str = None,
  timeouts: FailoverGroupSecondaryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the failover group secondary; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.primary">primary</a></code> | <code>str</code> | Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the failover group secondary;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#name FailoverGroupSecondary#name}

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.primary"></a>

```python
primary: str
```

- *Type:* str

Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#primary FailoverGroupSecondary#primary}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.timeouts"></a>

```python
timeouts: FailoverGroupSecondaryTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#timeouts FailoverGroupSecondary#timeouts}

---

### FailoverGroupSecondaryShowOutput <a name="FailoverGroupSecondaryShowOutput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondaryShowOutput()
```


### FailoverGroupSecondaryTimeouts <a name="FailoverGroupSecondaryTimeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondaryTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#create FailoverGroupSecondary#create}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#delete FailoverGroupSecondary#delete}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#read FailoverGroupSecondary#read}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#update FailoverGroupSecondary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#create FailoverGroupSecondary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#delete FailoverGroupSecondary#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#read FailoverGroupSecondary#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#update FailoverGroupSecondary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupSecondaryShowOutputList <a name="FailoverGroupSecondaryShowOutputList" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondaryShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FailoverGroupSecondaryShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FailoverGroupSecondaryShowOutputOutputReference <a name="FailoverGroupSecondaryShowOutputOutputReference" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountLocator">account_locator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.errorIntegration">error_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isListingAutoFulfillmentGroup">is_listing_auto_fulfillment_group</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isOptimizedRefreshEnabled">is_optimized_refresh_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimary">is_primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimaryReadOnly">is_primary_read_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.nextScheduledRefresh">next_scheduled_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.primary">primary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.regionGroup">region_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.rpoAssurance">rpo_assurance</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.secondaryState">secondary_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.snowflakeRegion">snowflake_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput">FailoverGroupSecondaryShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_locator`<sup>Required</sup> <a name="account_locator" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountLocator"></a>

```python
account_locator: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `allowed_accounts`<sup>Required</sup> <a name="allowed_accounts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedAccounts"></a>

```python
allowed_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_integration_types`<sup>Required</sup> <a name="allowed_integration_types" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedIntegrationTypes"></a>

```python
allowed_integration_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `error_integration`<sup>Required</sup> <a name="error_integration" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.errorIntegration"></a>

```python
error_integration: str
```

- *Type:* str

---

##### `is_listing_auto_fulfillment_group`<sup>Required</sup> <a name="is_listing_auto_fulfillment_group" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```python
is_listing_auto_fulfillment_group: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_optimized_refresh_enabled`<sup>Required</sup> <a name="is_optimized_refresh_enabled" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isOptimizedRefreshEnabled"></a>

```python
is_optimized_refresh_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimary"></a>

```python
is_primary: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_primary_read_only`<sup>Required</sup> <a name="is_primary_read_only" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimaryReadOnly"></a>

```python
is_primary_read_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next_scheduled_refresh`<sup>Required</sup> <a name="next_scheduled_refresh" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.nextScheduledRefresh"></a>

```python
next_scheduled_refresh: str
```

- *Type:* str

---

##### `object_types`<sup>Required</sup> <a name="object_types" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.objectTypes"></a>

```python
object_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.primary"></a>

```python
primary: str
```

- *Type:* str

---

##### `region_group`<sup>Required</sup> <a name="region_group" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.regionGroup"></a>

```python
region_group: str
```

- *Type:* str

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

---

##### `rpo_assurance`<sup>Required</sup> <a name="rpo_assurance" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.rpoAssurance"></a>

```python
rpo_assurance: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `secondary_state`<sup>Required</sup> <a name="secondary_state" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.secondaryState"></a>

```python
secondary_state: str
```

- *Type:* str

---

##### `snowflake_region`<sup>Required</sup> <a name="snowflake_region" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.snowflakeRegion"></a>

```python
snowflake_region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: FailoverGroupSecondaryShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput">FailoverGroupSecondaryShowOutput</a>

---


### FailoverGroupSecondaryTimeoutsOutputReference <a name="FailoverGroupSecondaryTimeoutsOutputReference" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import failover_group_secondary

failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FailoverGroupSecondaryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

---



