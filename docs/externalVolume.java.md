# `externalVolume` Submodule <a name="`externalVolume` Submodule" id="@cdktn/provider-snowflake.externalVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalVolume <a name="ExternalVolume" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume snowflake_external_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolume;

ExternalVolume.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .storageLocation(IResolvable|java.util.List<ExternalVolumeStorageLocation>)
//  .allowWrites(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ExternalVolumeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier for the external volume; |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.storageLocation">storageLocation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>></code> | storage_location block. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.allowWrites">allowWrites</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether write operations are allowed for the external volume; |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the external volume. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#id ExternalVolume#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier for the external volume;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#name ExternalVolume#name}

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.storageLocation"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_location ExternalVolume#storage_location}

---

##### `allowWrites`<sup>Optional</sup> <a name="allowWrites" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.allowWrites"></a>

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether write operations are allowed for the external volume;

must be set to TRUE for Iceberg tables that use Snowflake as the catalog. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#allow_writes ExternalVolume#allow_writes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the external volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#comment ExternalVolume#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#timeouts ExternalVolume#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.putStorageLocation">putStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetAllowWrites">resetAllowWrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageLocation` <a name="putStorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.putStorageLocation"></a>

```java
public void putStorageLocation(IResolvable|java.util.List<ExternalVolumeStorageLocation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.putStorageLocation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.putTimeouts"></a>

```java
public void putTimeouts(ExternalVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a>

---

##### `resetAllowWrites` <a name="resetAllowWrites" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetAllowWrites"></a>

```java
public void resetAllowWrites()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ExternalVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolume;

ExternalVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolume;

ExternalVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolume;

ExternalVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolume;

ExternalVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ExternalVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ExternalVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ExternalVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ExternalVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ExternalVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList">ExternalVolumeDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList">ExternalVolumeShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList">ExternalVolumeStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference">ExternalVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.allowWritesInput">allowWritesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.storageLocationInput">storageLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.allowWrites">allowWrites</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.describeOutput"></a>

```java
public ExternalVolumeDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList">ExternalVolumeDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.showOutput"></a>

```java
public ExternalVolumeShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList">ExternalVolumeShowOutputList</a>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.storageLocation"></a>

```java
public ExternalVolumeStorageLocationList getStorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList">ExternalVolumeStorageLocationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.timeouts"></a>

```java
public ExternalVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference">ExternalVolumeTimeoutsOutputReference</a>

---

##### `allowWritesInput`<sup>Optional</sup> <a name="allowWritesInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.allowWritesInput"></a>

```java
public java.lang.String getAllowWritesInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.storageLocationInput"></a>

```java
public IResolvable|java.util.List<ExternalVolumeStorageLocation> getStorageLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.timeoutsInput"></a>

```java
public IResolvable|ExternalVolumeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a>

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.allowWrites"></a>

```java
public java.lang.String getAllowWrites();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.externalVolume.ExternalVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalVolumeConfig <a name="ExternalVolumeConfig" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeConfig;

ExternalVolumeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .storageLocation(IResolvable|java.util.List<ExternalVolumeStorageLocation>)
//  .allowWrites(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ExternalVolumeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier for the external volume; |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.storageLocation">storageLocation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>></code> | storage_location block. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.allowWrites">allowWrites</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether write operations are allowed for the external volume; |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the external volume. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#id ExternalVolume#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier for the external volume;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#name ExternalVolume#name}

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.storageLocation"></a>

```java
public IResolvable|java.util.List<ExternalVolumeStorageLocation> getStorageLocation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_location ExternalVolume#storage_location}

---

##### `allowWrites`<sup>Optional</sup> <a name="allowWrites" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.allowWrites"></a>

```java
public java.lang.String getAllowWrites();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether write operations are allowed for the external volume;

must be set to TRUE for Iceberg tables that use Snowflake as the catalog. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#allow_writes ExternalVolume#allow_writes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the external volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#comment ExternalVolume#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeConfig.property.timeouts"></a>

```java
public ExternalVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#timeouts ExternalVolume#timeouts}

---

### ExternalVolumeDescribeOutput <a name="ExternalVolumeDescribeOutput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutput;

ExternalVolumeDescribeOutput.builder()
    .build();
```


### ExternalVolumeDescribeOutputStorageLocations <a name="ExternalVolumeDescribeOutputStorageLocations" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocations;

ExternalVolumeDescribeOutputStorageLocations.builder()
    .build();
```


### ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation <a name="ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation;

ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation.builder()
    .build();
```


### ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation <a name="ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation;

ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation.builder()
    .build();
```


### ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation <a name="ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation;

ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation.builder()
    .build();
```


### ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation <a name="ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation;

ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation.builder()
    .build();
```


### ExternalVolumeShowOutput <a name="ExternalVolumeShowOutput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeShowOutput;

ExternalVolumeShowOutput.builder()
    .build();
```


### ExternalVolumeStorageLocation <a name="ExternalVolumeStorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeStorageLocation;

ExternalVolumeStorageLocation.builder()
    .storageBaseUrl(java.lang.String)
    .storageLocationName(java.lang.String)
    .storageProvider(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .encryptionKmsKeyId(java.lang.String)
//  .encryptionType(java.lang.String)
//  .storageAwsAccessPointArn(java.lang.String)
//  .storageAwsExternalId(java.lang.String)
//  .storageAwsKeyId(java.lang.String)
//  .storageAwsRoleArn(java.lang.String)
//  .storageAwsSecretKey(java.lang.String)
//  .storageEndpoint(java.lang.String)
//  .usePrivatelinkEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageBaseUrl">storageBaseUrl</a></code> | <code>java.lang.String</code> | Specifies the base URL for your cloud storage location. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageLocationName">storageLocationName</a></code> | <code>java.lang.String</code> | Name of the storage location. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageProvider">storageProvider</a></code> | <code>java.lang.String</code> | Specifies the cloud storage provider that stores your data files. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Specifies the ID for your Office 365 tenant that the allowed and blocked storage accounts belong to. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>java.lang.String</code> | Specifies the ID for the KMS-managed key used to encrypt files. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Specifies the encryption type used. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsAccessPointArn">storageAwsAccessPointArn</a></code> | <code>java.lang.String</code> | Specifies the access point ARN for the S3 bucket containing your data files. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsExternalId">storageAwsExternalId</a></code> | <code>java.lang.String</code> | External ID that Snowflake uses to establish a trust relationship with AWS. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsKeyId">storageAwsKeyId</a></code> | <code>java.lang.String</code> | Specifies the AWS key ID for the S3-compatible storage location. Only applicable for S3COMPAT storage provider. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsRoleArn">storageAwsRoleArn</a></code> | <code>java.lang.String</code> | Specifies the case-sensitive Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsSecretKey">storageAwsSecretKey</a></code> | <code>java.lang.String</code> | Specifies the AWS secret key for the S3-compatible storage location. Only applicable for S3COMPAT storage provider. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Specifies the endpoint for the S3-compatible storage location. Only applicable for S3COMPAT storage provider. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a privatelink endpoint for the storage location. |

---

##### `storageBaseUrl`<sup>Required</sup> <a name="storageBaseUrl" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageBaseUrl"></a>

```java
public java.lang.String getStorageBaseUrl();
```

- *Type:* java.lang.String

Specifies the base URL for your cloud storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_base_url ExternalVolume#storage_base_url}

---

##### `storageLocationName`<sup>Required</sup> <a name="storageLocationName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageLocationName"></a>

```java
public java.lang.String getStorageLocationName();
```

- *Type:* java.lang.String

Name of the storage location.

Must be unique for the external volume. Do not use the name `terraform_provider_sentinel_storage_location` - this is reserved for the provider for performing update operations. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_location_name ExternalVolume#storage_location_name}

---

##### `storageProvider`<sup>Required</sup> <a name="storageProvider" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageProvider"></a>

```java
public java.lang.String getStorageProvider();
```

- *Type:* java.lang.String

Specifies the cloud storage provider that stores your data files.

Valid values are (case-insensitive): `GCS` | `AZURE` | `S3` | `S3GOV` | `S3COMPAT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_provider ExternalVolume#storage_provider}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

Specifies the ID for your Office 365 tenant that the allowed and blocked storage accounts belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#azure_tenant_id ExternalVolume#azure_tenant_id}

---

##### `encryptionKmsKeyId`<sup>Optional</sup> <a name="encryptionKmsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.encryptionKmsKeyId"></a>

```java
public java.lang.String getEncryptionKmsKeyId();
```

- *Type:* java.lang.String

Specifies the ID for the KMS-managed key used to encrypt files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#encryption_kms_key_id ExternalVolume#encryption_kms_key_id}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Specifies the encryption type used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#encryption_type ExternalVolume#encryption_type}

---

##### `storageAwsAccessPointArn`<sup>Optional</sup> <a name="storageAwsAccessPointArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsAccessPointArn"></a>

```java
public java.lang.String getStorageAwsAccessPointArn();
```

- *Type:* java.lang.String

Specifies the access point ARN for the S3 bucket containing your data files.

Only applicable for S3 and S3GOV storage providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_aws_access_point_arn ExternalVolume#storage_aws_access_point_arn}

---

##### `storageAwsExternalId`<sup>Optional</sup> <a name="storageAwsExternalId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsExternalId"></a>

```java
public java.lang.String getStorageAwsExternalId();
```

- *Type:* java.lang.String

External ID that Snowflake uses to establish a trust relationship with AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_aws_external_id ExternalVolume#storage_aws_external_id}

---

##### `storageAwsKeyId`<sup>Optional</sup> <a name="storageAwsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsKeyId"></a>

```java
public java.lang.String getStorageAwsKeyId();
```

- *Type:* java.lang.String

Specifies the AWS key ID for the S3-compatible storage location. Only applicable for S3COMPAT storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_aws_key_id ExternalVolume#storage_aws_key_id}

---

##### `storageAwsRoleArn`<sup>Optional</sup> <a name="storageAwsRoleArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsRoleArn"></a>

```java
public java.lang.String getStorageAwsRoleArn();
```

- *Type:* java.lang.String

Specifies the case-sensitive Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_aws_role_arn ExternalVolume#storage_aws_role_arn}

---

##### `storageAwsSecretKey`<sup>Optional</sup> <a name="storageAwsSecretKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageAwsSecretKey"></a>

```java
public java.lang.String getStorageAwsSecretKey();
```

- *Type:* java.lang.String

Specifies the AWS secret key for the S3-compatible storage location. Only applicable for S3COMPAT storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_aws_secret_key ExternalVolume#storage_aws_secret_key}

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

Specifies the endpoint for the S3-compatible storage location. Only applicable for S3COMPAT storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#storage_endpoint ExternalVolume#storage_endpoint}

---

##### `usePrivatelinkEndpoint`<sup>Optional</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation.property.usePrivatelinkEndpoint"></a>

```java
public java.lang.String getUsePrivatelinkEndpoint();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a privatelink endpoint for the storage location.

Only applicable for S3, S3GOV, and AZURE storage providers. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#use_privatelink_endpoint ExternalVolume#use_privatelink_endpoint}

---

### ExternalVolumeTimeouts <a name="ExternalVolumeTimeouts" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeTimeouts;

ExternalVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#create ExternalVolume#create}. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#delete ExternalVolume#delete}. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#read ExternalVolume#read}. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#update ExternalVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#create ExternalVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#delete ExternalVolume#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#read ExternalVolume#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/external_volume#update ExternalVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalVolumeDescribeOutputList <a name="ExternalVolumeDescribeOutputList" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputList;

new ExternalVolumeDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.get"></a>

```java
public ExternalVolumeDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalVolumeDescribeOutputOutputReference <a name="ExternalVolumeDescribeOutputOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputOutputReference;

new ExternalVolumeDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.active">active</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.allowWrites">allowWrites</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.storageLocations">storageLocations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList">ExternalVolumeDescribeOutputStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutput">ExternalVolumeDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.active"></a>

```java
public java.lang.String getActive();
```

- *Type:* java.lang.String

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.allowWrites"></a>

```java
public java.lang.String getAllowWrites();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.storageLocations"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsList getStorageLocations();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList">ExternalVolumeDescribeOutputStorageLocationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputOutputReference.property.internalValue"></a>

```java
public ExternalVolumeDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutput">ExternalVolumeDescribeOutput</a>

---


### ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList <a name="ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList;

new ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.get"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference <a name="ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference;

new ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureConsentUrl">azureConsentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureMultiTenantAppName">azureMultiTenantAppName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation">ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureConsentUrl`<sup>Required</sup> <a name="azureConsentUrl" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureConsentUrl"></a>

```java
public java.lang.String getAzureConsentUrl();
```

- *Type:* java.lang.String

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="azureMultiTenantAppName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureMultiTenantAppName"></a>

```java
public java.lang.String getAzureMultiTenantAppName();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.internalValue"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation">ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocation</a>

---


### ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList <a name="ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList;

new ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.get"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference <a name="ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference;

new ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.storageGcpServiceAccount">storageGcpServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation">ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKmsKeyId`<sup>Required</sup> <a name="encryptionKmsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```java
public java.lang.String getEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `storageGcpServiceAccount`<sup>Required</sup> <a name="storageGcpServiceAccount" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.storageGcpServiceAccount"></a>

```java
public java.lang.String getStorageGcpServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.internalValue"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation">ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocation</a>

---


### ExternalVolumeDescribeOutputStorageLocationsList <a name="ExternalVolumeDescribeOutputStorageLocationsList" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsList;

new ExternalVolumeDescribeOutputStorageLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.get"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalVolumeDescribeOutputStorageLocationsOutputReference <a name="ExternalVolumeDescribeOutputStorageLocationsOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsOutputReference;

new ExternalVolumeDescribeOutputStorageLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.azureStorageLocation">azureStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList">ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.gcsStorageLocation">gcsStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList">ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.s3CompatStorageLocation">s3CompatStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList">ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.s3StorageLocation">s3StorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList">ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.storageAllowedLocations">storageAllowedLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.storageBaseUrl">storageBaseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.storageProvider">storageProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocations">ExternalVolumeDescribeOutputStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureStorageLocation`<sup>Required</sup> <a name="azureStorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.azureStorageLocation"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList getAzureStorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList">ExternalVolumeDescribeOutputStorageLocationsAzureStorageLocationList</a>

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `gcsStorageLocation`<sup>Required</sup> <a name="gcsStorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.gcsStorageLocation"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList getGcsStorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList">ExternalVolumeDescribeOutputStorageLocationsGcsStorageLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `s3CompatStorageLocation`<sup>Required</sup> <a name="s3CompatStorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.s3CompatStorageLocation"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList getS3CompatStorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList">ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList</a>

---

##### `s3StorageLocation`<sup>Required</sup> <a name="s3StorageLocation" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.s3StorageLocation"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList getS3StorageLocation();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList">ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList</a>

---

##### `storageAllowedLocations`<sup>Required</sup> <a name="storageAllowedLocations" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.storageAllowedLocations"></a>

```java
public java.util.List<java.lang.String> getStorageAllowedLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageBaseUrl`<sup>Required</sup> <a name="storageBaseUrl" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.storageBaseUrl"></a>

```java
public java.lang.String getStorageBaseUrl();
```

- *Type:* java.lang.String

---

##### `storageProvider`<sup>Required</sup> <a name="storageProvider" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.storageProvider"></a>

```java
public java.lang.String getStorageProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsOutputReference.property.internalValue"></a>

```java
public ExternalVolumeDescribeOutputStorageLocations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocations">ExternalVolumeDescribeOutputStorageLocations</a>

---


### ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList <a name="ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList;

new ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.get"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference <a name="ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference;

new ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation">ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyId`<sup>Required</sup> <a name="awsAccessKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

---

##### `encryptionKmsKeyId`<sup>Required</sup> <a name="encryptionKmsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```java
public java.lang.String getEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.internalValue"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation">ExternalVolumeDescribeOutputStorageLocationsS3CompatStorageLocation</a>

---


### ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList <a name="ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList;

new ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.get"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference <a name="ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference;

new ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsAccessPointArn">storageAwsAccessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsExternalId">storageAwsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsIamUserArn">storageAwsIamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsRoleArn">storageAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation">ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKmsKeyId`<sup>Required</sup> <a name="encryptionKmsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```java
public java.lang.String getEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `storageAwsAccessPointArn`<sup>Required</sup> <a name="storageAwsAccessPointArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsAccessPointArn"></a>

```java
public java.lang.String getStorageAwsAccessPointArn();
```

- *Type:* java.lang.String

---

##### `storageAwsExternalId`<sup>Required</sup> <a name="storageAwsExternalId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsExternalId"></a>

```java
public java.lang.String getStorageAwsExternalId();
```

- *Type:* java.lang.String

---

##### `storageAwsIamUserArn`<sup>Required</sup> <a name="storageAwsIamUserArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsIamUserArn"></a>

```java
public java.lang.String getStorageAwsIamUserArn();
```

- *Type:* java.lang.String

---

##### `storageAwsRoleArn`<sup>Required</sup> <a name="storageAwsRoleArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsRoleArn"></a>

```java
public java.lang.String getStorageAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.usePrivatelinkEndpoint"></a>

```java
public java.lang.String getUsePrivatelinkEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.internalValue"></a>

```java
public ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation">ExternalVolumeDescribeOutputStorageLocationsS3StorageLocation</a>

---


### ExternalVolumeShowOutputList <a name="ExternalVolumeShowOutputList" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeShowOutputList;

new ExternalVolumeShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.get"></a>

```java
public ExternalVolumeShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalVolumeShowOutputOutputReference <a name="ExternalVolumeShowOutputOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeShowOutputOutputReference;

new ExternalVolumeShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.allowWrites">allowWrites</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutput">ExternalVolumeShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.allowWrites"></a>

```java
public IResolvable getAllowWrites();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutputOutputReference.property.internalValue"></a>

```java
public ExternalVolumeShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeShowOutput">ExternalVolumeShowOutput</a>

---


### ExternalVolumeStorageLocationList <a name="ExternalVolumeStorageLocationList" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeStorageLocationList;

new ExternalVolumeStorageLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.get"></a>

```java
public ExternalVolumeStorageLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ExternalVolumeStorageLocation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>>

---


### ExternalVolumeStorageLocationOutputReference <a name="ExternalVolumeStorageLocationOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeStorageLocationOutputReference;

new ExternalVolumeStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetEncryptionKmsKeyId">resetEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsAccessPointArn">resetStorageAwsAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsExternalId">resetStorageAwsExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsKeyId">resetStorageAwsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsRoleArn">resetStorageAwsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsSecretKey">resetStorageAwsSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetUsePrivatelinkEndpoint">resetUsePrivatelinkEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetAzureTenantId"></a>

```java
public void resetAzureTenantId()
```

##### `resetEncryptionKmsKeyId` <a name="resetEncryptionKmsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetEncryptionKmsKeyId"></a>

```java
public void resetEncryptionKmsKeyId()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetStorageAwsAccessPointArn` <a name="resetStorageAwsAccessPointArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsAccessPointArn"></a>

```java
public void resetStorageAwsAccessPointArn()
```

##### `resetStorageAwsExternalId` <a name="resetStorageAwsExternalId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsExternalId"></a>

```java
public void resetStorageAwsExternalId()
```

##### `resetStorageAwsKeyId` <a name="resetStorageAwsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsKeyId"></a>

```java
public void resetStorageAwsKeyId()
```

##### `resetStorageAwsRoleArn` <a name="resetStorageAwsRoleArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsRoleArn"></a>

```java
public void resetStorageAwsRoleArn()
```

##### `resetStorageAwsSecretKey` <a name="resetStorageAwsSecretKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageAwsSecretKey"></a>

```java
public void resetStorageAwsSecretKey()
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetStorageEndpoint"></a>

```java
public void resetStorageEndpoint()
```

##### `resetUsePrivatelinkEndpoint` <a name="resetUsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.resetUsePrivatelinkEndpoint"></a>

```java
public void resetUsePrivatelinkEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionKmsKeyIdInput">encryptionKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsAccessPointArnInput">storageAwsAccessPointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsExternalIdInput">storageAwsExternalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsKeyIdInput">storageAwsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsRoleArnInput">storageAwsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsSecretKeyInput">storageAwsSecretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageBaseUrlInput">storageBaseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageEndpointInput">storageEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageLocationNameInput">storageLocationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageProviderInput">storageProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.usePrivatelinkEndpointInput">usePrivatelinkEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionKmsKeyId">encryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsAccessPointArn">storageAwsAccessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsExternalId">storageAwsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsKeyId">storageAwsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsRoleArn">storageAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsSecretKey">storageAwsSecretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageBaseUrl">storageBaseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageLocationName">storageLocationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageProvider">storageProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionKmsKeyIdInput`<sup>Optional</sup> <a name="encryptionKmsKeyIdInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionKmsKeyIdInput"></a>

```java
public java.lang.String getEncryptionKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `storageAwsAccessPointArnInput`<sup>Optional</sup> <a name="storageAwsAccessPointArnInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsAccessPointArnInput"></a>

```java
public java.lang.String getStorageAwsAccessPointArnInput();
```

- *Type:* java.lang.String

---

##### `storageAwsExternalIdInput`<sup>Optional</sup> <a name="storageAwsExternalIdInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsExternalIdInput"></a>

```java
public java.lang.String getStorageAwsExternalIdInput();
```

- *Type:* java.lang.String

---

##### `storageAwsKeyIdInput`<sup>Optional</sup> <a name="storageAwsKeyIdInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsKeyIdInput"></a>

```java
public java.lang.String getStorageAwsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `storageAwsRoleArnInput`<sup>Optional</sup> <a name="storageAwsRoleArnInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsRoleArnInput"></a>

```java
public java.lang.String getStorageAwsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `storageAwsSecretKeyInput`<sup>Optional</sup> <a name="storageAwsSecretKeyInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsSecretKeyInput"></a>

```java
public java.lang.String getStorageAwsSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `storageBaseUrlInput`<sup>Optional</sup> <a name="storageBaseUrlInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageBaseUrlInput"></a>

```java
public java.lang.String getStorageBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageEndpointInput"></a>

```java
public java.lang.String getStorageEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageLocationNameInput`<sup>Optional</sup> <a name="storageLocationNameInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageLocationNameInput"></a>

```java
public java.lang.String getStorageLocationNameInput();
```

- *Type:* java.lang.String

---

##### `storageProviderInput`<sup>Optional</sup> <a name="storageProviderInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageProviderInput"></a>

```java
public java.lang.String getStorageProviderInput();
```

- *Type:* java.lang.String

---

##### `usePrivatelinkEndpointInput`<sup>Optional</sup> <a name="usePrivatelinkEndpointInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.usePrivatelinkEndpointInput"></a>

```java
public java.lang.String getUsePrivatelinkEndpointInput();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `encryptionKmsKeyId`<sup>Required</sup> <a name="encryptionKmsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```java
public java.lang.String getEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `storageAwsAccessPointArn`<sup>Required</sup> <a name="storageAwsAccessPointArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsAccessPointArn"></a>

```java
public java.lang.String getStorageAwsAccessPointArn();
```

- *Type:* java.lang.String

---

##### `storageAwsExternalId`<sup>Required</sup> <a name="storageAwsExternalId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsExternalId"></a>

```java
public java.lang.String getStorageAwsExternalId();
```

- *Type:* java.lang.String

---

##### `storageAwsKeyId`<sup>Required</sup> <a name="storageAwsKeyId" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsKeyId"></a>

```java
public java.lang.String getStorageAwsKeyId();
```

- *Type:* java.lang.String

---

##### `storageAwsRoleArn`<sup>Required</sup> <a name="storageAwsRoleArn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsRoleArn"></a>

```java
public java.lang.String getStorageAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `storageAwsSecretKey`<sup>Required</sup> <a name="storageAwsSecretKey" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageAwsSecretKey"></a>

```java
public java.lang.String getStorageAwsSecretKey();
```

- *Type:* java.lang.String

---

##### `storageBaseUrl`<sup>Required</sup> <a name="storageBaseUrl" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageBaseUrl"></a>

```java
public java.lang.String getStorageBaseUrl();
```

- *Type:* java.lang.String

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

---

##### `storageLocationName`<sup>Required</sup> <a name="storageLocationName" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageLocationName"></a>

```java
public java.lang.String getStorageLocationName();
```

- *Type:* java.lang.String

---

##### `storageProvider`<sup>Required</sup> <a name="storageProvider" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.storageProvider"></a>

```java
public java.lang.String getStorageProvider();
```

- *Type:* java.lang.String

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.usePrivatelinkEndpoint"></a>

```java
public java.lang.String getUsePrivatelinkEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|ExternalVolumeStorageLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeStorageLocation">ExternalVolumeStorageLocation</a>

---


### ExternalVolumeTimeoutsOutputReference <a name="ExternalVolumeTimeoutsOutputReference" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_volume.ExternalVolumeTimeoutsOutputReference;

new ExternalVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ExternalVolumeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.externalVolume.ExternalVolumeTimeouts">ExternalVolumeTimeouts</a>

---



