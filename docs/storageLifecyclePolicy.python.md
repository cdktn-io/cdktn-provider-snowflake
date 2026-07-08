# `storageLifecyclePolicy` Submodule <a name="`storageLifecyclePolicy` Submodule" id="@cdktn/provider-snowflake.storageLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageLifecyclePolicy <a name="StorageLifecyclePolicy" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy snowflake_storage_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  argument: IResolvable | typing.List[StorageLifecyclePolicyArgument],
  body: str,
  database: str,
  name: str,
  schema: str,
  archive_for_days: typing.Union[int, float] = None,
  archive_tier: str = None,
  comment: str = None,
  id: str = None,
  timeouts: StorageLifecyclePolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.argument">argument</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]</code> | argument block. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.body">body</a></code> | <code>str</code> | Specifies the SQL expression. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the storage lifecycle policy; |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.archiveForDays">archive_for_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days to keep rows that match the policy expression in archive storage. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.archiveTier">archive_tier</a></code> | <code>str</code> | Specifies the type of storage tier to use for archiving rows. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.argument"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]

argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#argument StorageLifecyclePolicy#argument}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.body"></a>

- *Type:* str

Specifies the SQL expression.

The expression can be any boolean-valued SQL expression. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#body StorageLifecyclePolicy#body}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#database StorageLifecyclePolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the storage lifecycle policy;

must be unique for the database and schema in which the storage lifecycle policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#schema StorageLifecyclePolicy#schema}

---

##### `archive_for_days`<sup>Optional</sup> <a name="archive_for_days" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.archiveForDays"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days to keep rows that match the policy expression in archive storage.

If set, Snowflake moves the data into archive storage according to the value you select for archive_tier. If unset, Snowflake expires the rows from the table without archiving the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#archive_for_days StorageLifecyclePolicy#archive_for_days}

---

##### `archive_tier`<sup>Optional</sup> <a name="archive_tier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.archiveTier"></a>

- *Type:* str

Specifies the type of storage tier to use for archiving rows.

After you set the ARCHIVE_TIER for a policy, you can’t modify it. If you don’t specify this parameter, the policy is an expiration policy that deletes rows without archiving them. Valid values are (case-insensitive): `COOL` | `COLD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#archive_tier StorageLifecyclePolicy#archive_tier}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the storage lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#comment StorageLifecyclePolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#timeouts StorageLifecyclePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument">put_argument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveForDays">reset_archive_for_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveTier">reset_archive_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_argument` <a name="put_argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument"></a>

```python
def put_argument(
  value: IResolvable | typing.List[StorageLifecyclePolicyArgument]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}.

---

##### `reset_archive_for_days` <a name="reset_archive_for_days" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveForDays"></a>

```python
def reset_archive_for_days() -> None
```

##### `reset_archive_tier` <a name="reset_archive_tier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveTier"></a>

```python
def reset_archive_tier() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageLifecyclePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argument">argument</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList">StorageLifecyclePolicyArgumentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList">StorageLifecyclePolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList">StorageLifecyclePolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference">StorageLifecyclePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDaysInput">archive_for_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTierInput">archive_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argumentInput">argument_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDays">archive_for_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTier">archive_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argument"></a>

```python
argument: StorageLifecyclePolicyArgumentList
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList">StorageLifecyclePolicyArgumentList</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.describeOutput"></a>

```python
describe_output: StorageLifecyclePolicyDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList">StorageLifecyclePolicyDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.showOutput"></a>

```python
show_output: StorageLifecyclePolicyShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList">StorageLifecyclePolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeouts"></a>

```python
timeouts: StorageLifecyclePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference">StorageLifecyclePolicyTimeoutsOutputReference</a>

---

##### `archive_for_days_input`<sup>Optional</sup> <a name="archive_for_days_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDaysInput"></a>

```python
archive_for_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archive_tier_input`<sup>Optional</sup> <a name="archive_tier_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTierInput"></a>

```python
archive_tier_input: str
```

- *Type:* str

---

##### `argument_input`<sup>Optional</sup> <a name="argument_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argumentInput"></a>

```python
argument_input: IResolvable | typing.List[StorageLifecyclePolicyArgument]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageLifecyclePolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---

##### `archive_for_days`<sup>Required</sup> <a name="archive_for_days" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDays"></a>

```python
archive_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archive_tier`<sup>Required</sup> <a name="archive_tier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTier"></a>

```python
archive_tier: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageLifecyclePolicyArgument <a name="StorageLifecyclePolicyArgument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyArgument(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.name">name</a></code> | <code>str</code> | The argument name. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.type">type</a></code> | <code>str</code> | The argument type. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.name"></a>

```python
name: str
```

- *Type:* str

The argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.type"></a>

```python
type: str
```

- *Type:* str

The argument type. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#type StorageLifecyclePolicy#type}

---

### StorageLifecyclePolicyConfig <a name="StorageLifecyclePolicyConfig" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  argument: IResolvable | typing.List[StorageLifecyclePolicyArgument],
  body: str,
  database: str,
  name: str,
  schema: str,
  archive_for_days: typing.Union[int, float] = None,
  archive_tier: str = None,
  comment: str = None,
  id: str = None,
  timeouts: StorageLifecyclePolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.argument">argument</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]</code> | argument block. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.body">body</a></code> | <code>str</code> | Specifies the SQL expression. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the storage lifecycle policy; |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveForDays">archive_for_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days to keep rows that match the policy expression in archive storage. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveTier">archive_tier</a></code> | <code>str</code> | Specifies the type of storage tier to use for archiving rows. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.argument"></a>

```python
argument: IResolvable | typing.List[StorageLifecyclePolicyArgument]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]

argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#argument StorageLifecyclePolicy#argument}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Specifies the SQL expression.

The expression can be any boolean-valued SQL expression. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#body StorageLifecyclePolicy#body}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#database StorageLifecyclePolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the storage lifecycle policy;

must be unique for the database and schema in which the storage lifecycle policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#schema StorageLifecyclePolicy#schema}

---

##### `archive_for_days`<sup>Optional</sup> <a name="archive_for_days" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveForDays"></a>

```python
archive_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days to keep rows that match the policy expression in archive storage.

If set, Snowflake moves the data into archive storage according to the value you select for archive_tier. If unset, Snowflake expires the rows from the table without archiving the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#archive_for_days StorageLifecyclePolicy#archive_for_days}

---

##### `archive_tier`<sup>Optional</sup> <a name="archive_tier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveTier"></a>

```python
archive_tier: str
```

- *Type:* str

Specifies the type of storage tier to use for archiving rows.

After you set the ARCHIVE_TIER for a policy, you can’t modify it. If you don’t specify this parameter, the policy is an expiration policy that deletes rows without archiving them. Valid values are (case-insensitive): `COOL` | `COLD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#archive_tier StorageLifecyclePolicy#archive_tier}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the storage lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#comment StorageLifecyclePolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.timeouts"></a>

```python
timeouts: StorageLifecyclePolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#timeouts StorageLifecyclePolicy#timeouts}

---

### StorageLifecyclePolicyDescribeOutput <a name="StorageLifecyclePolicyDescribeOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput()
```


### StorageLifecyclePolicyDescribeOutputSignature <a name="StorageLifecyclePolicyDescribeOutputSignature" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature()
```


### StorageLifecyclePolicyShowOutput <a name="StorageLifecyclePolicyShowOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyShowOutput()
```


### StorageLifecyclePolicyTimeouts <a name="StorageLifecyclePolicyTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageLifecyclePolicyArgumentList <a name="StorageLifecyclePolicyArgumentList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyArgumentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageLifecyclePolicyArgumentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageLifecyclePolicyArgument]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>]

---


### StorageLifecyclePolicyArgumentOutputReference <a name="StorageLifecyclePolicyArgumentOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageLifecyclePolicyArgument
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>

---


### StorageLifecyclePolicyDescribeOutputList <a name="StorageLifecyclePolicyDescribeOutputList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageLifecyclePolicyDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageLifecyclePolicyDescribeOutputOutputReference <a name="StorageLifecyclePolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveForDays">archive_for_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveTier">archive_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList">StorageLifecyclePolicyDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput">StorageLifecyclePolicyDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_for_days`<sup>Required</sup> <a name="archive_for_days" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveForDays"></a>

```python
archive_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archive_tier`<sup>Required</sup> <a name="archive_tier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveTier"></a>

```python
archive_tier: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.signature"></a>

```python
signature: StorageLifecyclePolicyDescribeOutputSignatureList
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList">StorageLifecyclePolicyDescribeOutputSignatureList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: StorageLifecyclePolicyDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput">StorageLifecyclePolicyDescribeOutput</a>

---


### StorageLifecyclePolicyDescribeOutputSignatureList <a name="StorageLifecyclePolicyDescribeOutputSignatureList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageLifecyclePolicyDescribeOutputSignatureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageLifecyclePolicyDescribeOutputSignatureOutputReference <a name="StorageLifecyclePolicyDescribeOutputSignatureOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature">StorageLifecyclePolicyDescribeOutputSignature</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.internalValue"></a>

```python
internal_value: StorageLifecyclePolicyDescribeOutputSignature
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature">StorageLifecyclePolicyDescribeOutputSignature</a>

---


### StorageLifecyclePolicyShowOutputList <a name="StorageLifecyclePolicyShowOutputList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageLifecyclePolicyShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageLifecyclePolicyShowOutputOutputReference <a name="StorageLifecyclePolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput">StorageLifecyclePolicyShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: StorageLifecyclePolicyShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput">StorageLifecyclePolicyShowOutput</a>

---


### StorageLifecyclePolicyTimeoutsOutputReference <a name="StorageLifecyclePolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import storage_lifecycle_policy

storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageLifecyclePolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---



