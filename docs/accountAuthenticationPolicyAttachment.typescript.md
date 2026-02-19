# `accountAuthenticationPolicyAttachment` Submodule <a name="`accountAuthenticationPolicyAttachment` Submodule" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountAuthenticationPolicyAttachment <a name="AccountAuthenticationPolicyAttachment" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment snowflake_account_authentication_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer"></a>

```typescript
import { accountAuthenticationPolicyAttachment } from '@cdktn/provider-snowflake'

new accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment(scope: Construct, id: string, config: AccountAuthenticationPolicyAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig">AccountAuthenticationPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig">AccountAuthenticationPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: AccountAuthenticationPolicyAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccountAuthenticationPolicyAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isConstruct"></a>

```typescript
import { accountAuthenticationPolicyAttachment } from '@cdktn/provider-snowflake'

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformElement"></a>

```typescript
import { accountAuthenticationPolicyAttachment } from '@cdktn/provider-snowflake'

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformResource"></a>

```typescript
import { accountAuthenticationPolicyAttachment } from '@cdktn/provider-snowflake'

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport"></a>

```typescript
import { accountAuthenticationPolicyAttachment } from '@cdktn/provider-snowflake'

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccountAuthenticationPolicyAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountAuthenticationPolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountAuthenticationPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccountAuthenticationPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference">AccountAuthenticationPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: AccountAuthenticationPolicyAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference">AccountAuthenticationPolicyAttachmentTimeoutsOutputReference</a>

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.authenticationPolicyInput"></a>

```typescript
public readonly authenticationPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AccountAuthenticationPolicyAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a>

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountAuthenticationPolicyAttachmentConfig <a name="AccountAuthenticationPolicyAttachmentConfig" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.Initializer"></a>

```typescript
import { accountAuthenticationPolicyAttachment } from '@cdktn/provider-snowflake'

const accountAuthenticationPolicyAttachmentConfig: accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | Qualified name (`"db"."schema"."policy_name"`) of the authentication policy to apply to the current account. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#id AccountAuthenticationPolicyAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

Qualified name (`"db"."schema"."policy_name"`) of the authentication policy to apply to the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#authentication_policy AccountAuthenticationPolicyAttachment#authentication_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#id AccountAuthenticationPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccountAuthenticationPolicyAttachmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#timeouts AccountAuthenticationPolicyAttachment#timeouts}

---

### AccountAuthenticationPolicyAttachmentTimeouts <a name="AccountAuthenticationPolicyAttachmentTimeouts" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.Initializer"></a>

```typescript
import { accountAuthenticationPolicyAttachment } from '@cdktn/provider-snowflake'

const accountAuthenticationPolicyAttachmentTimeouts: accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#create AccountAuthenticationPolicyAttachment#create}. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#delete AccountAuthenticationPolicyAttachment#delete}. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#read AccountAuthenticationPolicyAttachment#read}. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#update AccountAuthenticationPolicyAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#create AccountAuthenticationPolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#delete AccountAuthenticationPolicyAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#read AccountAuthenticationPolicyAttachment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/account_authentication_policy_attachment#update AccountAuthenticationPolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountAuthenticationPolicyAttachmentTimeoutsOutputReference <a name="AccountAuthenticationPolicyAttachmentTimeoutsOutputReference" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { accountAuthenticationPolicyAttachment } from '@cdktn/provider-snowflake'

new accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountAuthenticationPolicyAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a>

---



