# `tableStorageLifecyclePolicyAttachment` Submodule <a name="`tableStorageLifecyclePolicyAttachment` Submodule" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableStorageLifecyclePolicyAttachment <a name="TableStorageLifecyclePolicyAttachment" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment snowflake_table_storage_lifecycle_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer"></a>

```java
import io.cdktn.providers.snowflake.table_storage_lifecycle_policy_attachment.TableStorageLifecyclePolicyAttachment;

TableStorageLifecyclePolicyAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .on(java.util.List<java.lang.String>)
    .storageLifecyclePolicyName(java.lang.String)
    .tableName(java.lang.String)
    .tableType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(TableStorageLifecyclePolicyAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.on">on</a></code> | <code>java.util.List<java.lang.String></code> | List of the columns the storage lifecycle policy applies to. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.storageLifecyclePolicyName">storageLifecyclePolicyName</a></code> | <code>java.lang.String</code> | Fully qualified name of the storage lifecycle policy to attach to the table. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Fully qualified name of the table (or dynamic table) the storage lifecycle policy is attached to. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.tableType">tableType</a></code> | <code>java.lang.String</code> | Specifies the type of the table referenced in `table_name`. Valid values are (case-insensitive): `TABLE` \| `DYNAMIC_TABLE`. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#id TableStorageLifecyclePolicyAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.on"></a>

- *Type:* java.util.List<java.lang.String>

List of the columns the storage lifecycle policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#on TableStorageLifecyclePolicyAttachment#on}

---

##### `storageLifecyclePolicyName`<sup>Required</sup> <a name="storageLifecyclePolicyName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.storageLifecyclePolicyName"></a>

- *Type:* java.lang.String

Fully qualified name of the storage lifecycle policy to attach to the table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#storage_lifecycle_policy_name TableStorageLifecyclePolicyAttachment#storage_lifecycle_policy_name}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Fully qualified name of the table (or dynamic table) the storage lifecycle policy is attached to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#table_name TableStorageLifecyclePolicyAttachment#table_name}

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.tableType"></a>

- *Type:* java.lang.String

Specifies the type of the table referenced in `table_name`. Valid values are (case-insensitive): `TABLE` | `DYNAMIC_TABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#table_type TableStorageLifecyclePolicyAttachment#table_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#id TableStorageLifecyclePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#timeouts TableStorageLifecyclePolicyAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts"></a>

```java
public void putTimeouts(TableStorageLifecyclePolicyAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TableStorageLifecyclePolicyAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.table_storage_lifecycle_policy_attachment.TableStorageLifecyclePolicyAttachment;

TableStorageLifecyclePolicyAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.table_storage_lifecycle_policy_attachment.TableStorageLifecyclePolicyAttachment;

TableStorageLifecyclePolicyAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.table_storage_lifecycle_policy_attachment.TableStorageLifecyclePolicyAttachment;

TableStorageLifecyclePolicyAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.table_storage_lifecycle_policy_attachment.TableStorageLifecyclePolicyAttachment;

TableStorageLifecyclePolicyAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TableStorageLifecyclePolicyAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TableStorageLifecyclePolicyAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TableStorageLifecyclePolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TableStorageLifecyclePolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TableStorageLifecyclePolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference">TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.onInput">onInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyNameInput">storageLifecyclePolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableTypeInput">tableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.on">on</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyName">storageLifecyclePolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableType">tableType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeouts"></a>

```java
public TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference">TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.onInput"></a>

```java
public java.util.List<java.lang.String> getOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageLifecyclePolicyNameInput`<sup>Optional</sup> <a name="storageLifecyclePolicyNameInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyNameInput"></a>

```java
public java.lang.String getStorageLifecyclePolicyNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tableTypeInput`<sup>Optional</sup> <a name="tableTypeInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableTypeInput"></a>

```java
public java.lang.String getTableTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeoutsInput"></a>

```java
public IResolvable|TableStorageLifecyclePolicyAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.on"></a>

```java
public java.util.List<java.lang.String> getOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageLifecyclePolicyName`<sup>Required</sup> <a name="storageLifecyclePolicyName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyName"></a>

```java
public java.lang.String getStorageLifecyclePolicyName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableType"></a>

```java
public java.lang.String getTableType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TableStorageLifecyclePolicyAttachmentConfig <a name="TableStorageLifecyclePolicyAttachmentConfig" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.table_storage_lifecycle_policy_attachment.TableStorageLifecyclePolicyAttachmentConfig;

TableStorageLifecyclePolicyAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .on(java.util.List<java.lang.String>)
    .storageLifecyclePolicyName(java.lang.String)
    .tableName(java.lang.String)
    .tableType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(TableStorageLifecyclePolicyAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.on">on</a></code> | <code>java.util.List<java.lang.String></code> | List of the columns the storage lifecycle policy applies to. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.storageLifecyclePolicyName">storageLifecyclePolicyName</a></code> | <code>java.lang.String</code> | Fully qualified name of the storage lifecycle policy to attach to the table. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Fully qualified name of the table (or dynamic table) the storage lifecycle policy is attached to. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableType">tableType</a></code> | <code>java.lang.String</code> | Specifies the type of the table referenced in `table_name`. Valid values are (case-insensitive): `TABLE` \| `DYNAMIC_TABLE`. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#id TableStorageLifecyclePolicyAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.on"></a>

```java
public java.util.List<java.lang.String> getOn();
```

- *Type:* java.util.List<java.lang.String>

List of the columns the storage lifecycle policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#on TableStorageLifecyclePolicyAttachment#on}

---

##### `storageLifecyclePolicyName`<sup>Required</sup> <a name="storageLifecyclePolicyName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.storageLifecyclePolicyName"></a>

```java
public java.lang.String getStorageLifecyclePolicyName();
```

- *Type:* java.lang.String

Fully qualified name of the storage lifecycle policy to attach to the table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#storage_lifecycle_policy_name TableStorageLifecyclePolicyAttachment#storage_lifecycle_policy_name}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Fully qualified name of the table (or dynamic table) the storage lifecycle policy is attached to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#table_name TableStorageLifecyclePolicyAttachment#table_name}

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableType"></a>

```java
public java.lang.String getTableType();
```

- *Type:* java.lang.String

Specifies the type of the table referenced in `table_name`. Valid values are (case-insensitive): `TABLE` | `DYNAMIC_TABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#table_type TableStorageLifecyclePolicyAttachment#table_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#id TableStorageLifecyclePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.timeouts"></a>

```java
public TableStorageLifecyclePolicyAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#timeouts TableStorageLifecyclePolicyAttachment#timeouts}

---

### TableStorageLifecyclePolicyAttachmentTimeouts <a name="TableStorageLifecyclePolicyAttachmentTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.table_storage_lifecycle_policy_attachment.TableStorageLifecyclePolicyAttachmentTimeouts;

TableStorageLifecyclePolicyAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#create TableStorageLifecyclePolicyAttachment#create}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#delete TableStorageLifecyclePolicyAttachment#delete}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#read TableStorageLifecyclePolicyAttachment#read}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#update TableStorageLifecyclePolicyAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#create TableStorageLifecyclePolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#delete TableStorageLifecyclePolicyAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#read TableStorageLifecyclePolicyAttachment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#update TableStorageLifecyclePolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference <a name="TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.table_storage_lifecycle_policy_attachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference;

new TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|TableStorageLifecyclePolicyAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

---



